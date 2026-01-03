const appContainer = document.getElementById("app");

const screens = {
  login: `
    <section class="screen login">
      <div class="logo">🐶</div>
      <h1>BIENVENIDO</h1>
      <p>Ingresa con tu cuenta</p>

      <input type="email" class="input" placeholder="Correo electrónico" />
      <input type="password" class="input" placeholder="Contraseña" />

      <button class="button primary">INGRESAR</button>

      <div class="social-logins">
        <button class="button secondary">Google</button>
        <button class="button secondary">Apple</button>
      </div>

      <p>¿No tienes cuenta? <a href="#" data-screen="register">Regístrate</a></p>
      <a href="#" data-screen="explore">Explorar sin registrarse</a>
    </section>
  `
};

function loadScreen(name) {
  appContainer.innerHTML = screens[name];
}

loadScreen("login");
