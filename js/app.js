const app = document.getElementById("app");

function loginScreen() {
  return `
    <section class="screen">
      <div class="logo">🐶</div>
      <h1>BIENVENIDO</h1>
      <p>Ingresa con tu cuenta</p>

      <input class="input" type="email" placeholder="Correo electrónico" />
      <input class="input" type="password" placeholder="Contraseña" />

      <button class="button" onclick="alert('Login simulado')">
        INGRESAR
      </button>
    </section>
  `;
}

app.innerHTML = loginScreen();
