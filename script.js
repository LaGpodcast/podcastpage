// Obtener todos los enlaces del menú de navegación
const navLinks = document.querySelectorAll("nav ul li a");

// Agregar evento de clic a cada enlace
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Obtener el destino del enlace (el atributo "href")
    const target = document.querySelector(link.getAttribute("href"));

    // Desplazamiento suave hacia el destino
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  // Obtener la posición vertical del desplazamiento
  const scrollPosition = window.scrollY;

  // Cambiar el color de fondo del encabezado cuando se hace scroll
  if (scrollPosition > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener los valores de los campos del formulario
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Validar los campos (puedes agregar tus propias reglas de validación)
  if (name === "" || email === "" || message === "") {
    alert("Por favor, completa todos los campos");
    return;
  }

  // Enviar el formulario si los campos son válidos
  contactForm.submit();
});

// Función para mostrar el anuncio
function mostrarAnuncio() {
  // Crear el elemento de video
  var videoElement = document.createElement("video");
  videoElement.src = "https://youtube.com/shorts/NC7BoZ9vU1M?feature=share"; // Reemplazar con la URL del video que deseas mostrar
  videoElement.controls = true;

  // Crear el enlace asociado al video
  var enlaceElement = document.createElement("a");
  enlaceElement.href =
    "https://www.youtube.com/channel/UC7N7Stnarzunwl5IQNecq_Q"; // Reemplazar con la URL a la que deseas redirigir al hacer clic en el video

  // Envolver el video con el enlace
  enlaceElement.appendChild(videoElement);

  // Crear el botón para cerrar el anuncio
  var botonCerrar = document.createElement("button");
  botonCerrar.textContent = "X";
  botonCerrar.addEventListener("click", function () {
    // Ocultar el anuncio al hacer clic en el botón de cerrar
    anuncio.style.display = "none";
    // Configurar el temporizador para mostrar el anuncio nuevamente después de 20 minutos
    setTimeout(mostrarAnuncio, 20 * 60 * 1000);
  });

  // Crear el contenedor del anuncio
  var anuncio = document.createElement("div");
  anuncio.classList.add("anuncio");
  anuncio.appendChild(enlaceElement);
  anuncio.appendChild(botonCerrar);

  // Agregar el anuncio al cuerpo del documento
  document.body.appendChild(anuncio);
}

// Mostrar el anuncio inicial
mostrarAnuncio();
