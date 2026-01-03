/**
 * PASEO App - Main Application Logic
 * Handles state management, interactions, and component initialization
 */

// Application State
const appState = {
  currentUser: null,
  userRole: null,
  services: [
    { id: 1, name: 'Paseos', icon: '🐕', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop' },
    { id: 2, name: 'Guardería', icon: '🏠', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop' },
    { id: 3, name: 'Baño y peluquería', icon: '🛁', image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=300&fit=crop' },
    { id: 4, name: 'Entrenamiento', icon: '🎾', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop' },
    { id: 5, name: 'Celebraciones y fiestas', icon: '🎉', image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&h=300&fit=crop' },
    { id: 6, name: 'Seguro de salud', icon: '🏥', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop' }
  ],
  appointments: []
};

// Mock user data
const mockUsers = {
  'demo@paseo.com': {
    name: 'Loren',
    email: 'demo@paseo.com',
    password: 'demo123',
    role: 'owner'
  }
};

/**
 * Initialize the application
 */
function initApp() {
  // Register all screens with router
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    router.register(screen.id, screen);
  });

  // Setup event listeners
  setupLoginForm();
  setupRegisterForm();
  setupRoleSelection();
  setupNavigation();
  setupHomeScreen();
  setupServicesScreen();

  // Start on login screen
  router.navigate('login-screen', false);
}

/**
 * Setup login form
 */
function setupLoginForm() {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      // Simple validation
      if (mockUsers[email] && mockUsers[email].password === password) {
        appState.currentUser = mockUsers[email];
        appState.userRole = mockUsers[email].role;
        router.navigate('home-screen');
        updateHomeGreeting();
      } else {
        alert('Credenciales incorrectas. Usa: demo@paseo.com / demo123');
      }
    });
  }

  // Social login buttons
  const socialButtons = document.querySelectorAll('.social-login-btn');
  socialButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Mock social login
      appState.currentUser = { name: 'Usuario', email: 'social@paseo.com' };
      router.navigate('role-screen');
    });
  });

  // Navigate to register
  const registerLink = document.getElementById('register-link');
  if (registerLink) {
    registerLink.addEventListener('click', (e) => {
      e.preventDefault();
      router.navigate('register-screen');
    });
  }

  // Inspect app link
  const inspectLink = document.getElementById('inspect-link');
  if (inspectLink) {
    inspectLink.addEventListener('click', (e) => {
      e.preventDefault();
      appState.currentUser = { name: 'Invitado', email: 'guest@paseo.com' };
      router.navigate('role-screen');
    });
  }
}

/**
 * Setup register form
 */
function setupRegisterForm() {
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('register-name').value;
      const email = document.getElementById('register-email').value;

      appState.currentUser = { name, email };
      router.navigate('role-screen');
    });
  }

  // Back to login link
  const loginLink = document.getElementById('login-link');
  if (loginLink) {
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      router.navigate('login-screen');
    });
  }
}

/**
 * Setup role selection
 */
function setupRoleSelection() {
  const roleCards = document.querySelectorAll('.role-card');
  roleCards.forEach(card => {
    card.addEventListener('click', () => {
      const role = card.getAttribute('data-role');
      appState.userRole = role;
      router.navigate('home-screen');
      updateHomeGreeting();
    });
  });
}

/**
 * Setup navigation
 */
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const screen = item.getAttribute('data-screen');
      if (screen) {
        router.navigate(screen);
      }
    });
  });
}

/**
 * Setup home screen
 */
function setupHomeScreen() {
  updateHomeGreeting();
  
  // Schedule appointment button
  const scheduleBtn = document.getElementById('schedule-btn');
  if (scheduleBtn) {
    scheduleBtn.addEventListener('click', () => {
      router.navigate('services-screen');
    });
  }

  // Service cards on home
  const homeServiceCards = document.querySelectorAll('.home-service-card');
  homeServiceCards.forEach(card => {
    card.addEventListener('click', () => {
      const serviceId = card.getAttribute('data-service-id');
      // Navigate to services or specific service detail
      router.navigate('services-screen');
    });
  });
}

/**
 * Setup services screen
 */
function setupServicesScreen() {
  renderServices();

  const serviceCards = document.querySelectorAll('.service-detail-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      alert('Servicio seleccionado. Funcionalidad de reserva próximamente.');
    });
  });
}

/**
 * Update home greeting
 */
function updateHomeGreeting() {
  const greetingEl = document.getElementById('home-greeting');
  if (greetingEl && appState.currentUser) {
    greetingEl.textContent = `¡Hola, ${appState.currentUser.name}!`;
  }
}

/**
 * Render services on services screen
 */
function renderServices() {
  const servicesGrid = document.getElementById('services-grid');
  if (!servicesGrid) return;

  // Clear existing content
  servicesGrid.innerHTML = '';

  // Render service cards
  appState.services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card service-detail-card';
    card.setAttribute('data-service-id', service.id);
    card.style.backgroundImage = `url(${service.image})`;
    
    card.innerHTML = `
      <div class="service-card-content">
        <h3 class="service-card-title">${service.name}</h3>
      </div>
    `;
    
    servicesGrid.appendChild(card);
  });

  // Add click listeners
  const serviceCards = document.querySelectorAll('.service-detail-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      alert('Servicio seleccionado. Funcionalidad de reserva próximamente.');
    });
  });
}

/**
 * Add micro-interactions
 */
function addMicroInteractions() {
  // Button press effect
  document.querySelectorAll('.btn, .card-clickable, .service-card, .role-card').forEach(el => {
    el.addEventListener('mousedown', () => {
      el.style.transform = 'scale(0.98)';
    });
    el.addEventListener('mouseup', () => {
      el.style.transform = '';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initApp();
    addMicroInteractions();
  });
} else {
  initApp();
  addMicroInteractions();
}
