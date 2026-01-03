/**
 * Simple Router for PASEO App
 * Handles screen navigation without page reloads
 */

class Router {
  constructor() {
    this.currentScreen = null;
    this.screens = {};
    this.history = [];
  }

  /**
   * Register a screen
   * @param {string} name - Screen identifier
   * @param {HTMLElement} element - Screen element
   */
  register(name, element) {
    this.screens[name] = element;
  }

  /**
   * Navigate to a screen
   * @param {string} name - Screen to navigate to
   * @param {boolean} addToHistory - Whether to add to navigation history
   */
  navigate(name, addToHistory = true) {
    if (!this.screens[name]) {
      console.error(`Screen "${name}" not found`);
      return;
    }

    // Hide current screen
    if (this.currentScreen && this.screens[this.currentScreen]) {
      this.screens[this.currentScreen].classList.remove('active');
    }

    // Add to history
    if (addToHistory && this.currentScreen !== name) {
      this.history.push(this.currentScreen);
    }

    // Show new screen
    this.currentScreen = name;
    this.screens[name].classList.add('active');

    // Update bottom navigation active state
    this.updateBottomNav(name);

    // Scroll to top
    window.scrollTo(0, 0);
  }

  /**
   * Go back to previous screen
   */
  back() {
    if (this.history.length > 0) {
      const previousScreen = this.history.pop();
      if (previousScreen) {
        this.navigate(previousScreen, false);
      }
    }
  }

  /**
   * Update bottom navigation active state
   * @param {string} screenName - Current screen name
   */
  updateBottomNav(screenName) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      const targetScreen = item.getAttribute('data-screen');
      if (targetScreen === screenName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  /**
   * Get current screen name
   * @returns {string} Current screen name
   */
  getCurrentScreen() {
    return this.currentScreen;
  }
}

// Export router instance
const router = new Router();
