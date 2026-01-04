const app = document.getElementById("app");

const screens = {
  login: `
    <div class="login">

      <div class="login-header">
        <h1 class="login-title">Bienvenido</h1>
        <p class="login-subtitle">Ingresá a tu cuenta</p>
      </div>

      <div class="login-form">
        <label>Email</label>
        <input type="email" />

        <label>Contraseña</label>
        <input type="password" />

        <button id="goHome">Ingresar</button>
      </div>

    </div>
  `,

  home: `
    <div class="home">
      <div class="home-header">
        <h2 class="home-title">Hola, David 👋</h2>
        <div class="avatar"></div>
      </div>

      <div class="main-card">
        <h3>Paseo en curso</h3>
        <p>Rocky · 30 minutos</p>
      </div>

      <div class="quick-actions">
        <div class="action">Nuevo<br>Paseo</div>
        <div class="action">Mascotas</div>
        <div class="action">Agenda</div>
        <div class="action">Perfil</div>
      </div>

      <h4 class="section-title">Próximos paseos</h4>

      <div class="list">
        <div class="list-item">
          <span>Luna</span>
          <span>16:30</span>
        </div>
        <div class="list-item">
          <span>Max</span>
          <span>18:00</span>
        </div>
      </div>

      <div class="bottom-nav">
        <div class="nav-item">Home</div>
        <div class="nav-item">Paseos</div>
        <div class="nav-item">Chat</div>
        <div class="nav-item">Perfil</div>
      </div>
    </div>
  `
};

function loadScreen(name) {
  app.innerHTML = screens[name];

  if (name === "login") {
    document
      .getElementById("goHome")
      ?.addEventListener("click", () => loadScreen("home"));
  }
}

loadScreen("login");
