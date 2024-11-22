//VALIDACION DE FORMULARIO
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["fname"].value;
  const flastname = form.elements["flastname"].value;
  const fadress = form.elements["fadress"].value;
  const fphone = form.elements["fphone"].value;
  const femail = form.elements["femail"].value;

  if (!fname || !flastname || !fadress || !fphone || !femail) {
    event.preventDefault();
    alert("Por favor, complete todos los campos");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingese un correo valido");
  }
});
// CREAR UNA FUNCION QUE VALIDA EL correo
function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
  return re.test(String(femail).toLowerCase());
}

//MENU HAMBURGUESA

const menu = document.querySelector(".menu-horizontal");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

//Funcion para alternar la visibilidad del MENU
function toggleMenu() {
  menu.classList.toggle("menu_opened");
  if (menu.classList.contains("menu_opened")) {
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block";
  } else {
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
  }
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

//ajustar botones
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menu.classList.remove("menu_opened");
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "none";
  } else {
    openMenuBtn.style.display = "block";
  }
});

// REGISTRO DE USUARIOS
const registerForm = document.querySelector(".register-form");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    localStorage.setItem(
      "userData",
      JSON.stringify({ nombre, email, password })
    );
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    window.location.href = "inicio_sesion.html";
  });
}

// INICIO DE SESIÓN
const loginForm = document.querySelector(".login-form form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = JSON.parse(localStorage.getItem("userData"));

    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      alert(`Bienvenido, ${userData.nombre}!`);
      window.location.href = "index.html";
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  });
}
