// Función para activar/desactivar el menú hamburguesa
document.getElementById("menu-icon").addEventListener("click", function () {
    var nav = document.getElementById("nav");
    nav.classList.toggle("active");
});
function abrirPagina(event, url) {
    // Abre una nueva pestaña
    event.target.parentNode.querySelector("a").target = "_blank";
  
    // Redirecciona al usuario a la página web
    event.target.parentNode.querySelector("a").href = url;
  }
  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let index = 0;
  
  function showImage() {
    images.forEach((img, i) => {
      img.style.transform = `translateX(${100 * (i - index)}%)`;
    });
  }
  
  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage();
  });
  
  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage();
  });
  
  showImage(); 
  // Script para el desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth' // Desplazamiento suave
        });
      }
    });
  }); 
  // Función para aplicar la animación a los elementos con la clase "secciones"
function aplicarAnimacion() {
    const secciones = document.querySelectorAll('.secciones');
    
    secciones.forEach((seccion, index) => {
        setTimeout(() => {
            seccion.style.animation = 'aparecer 0.5s ease-in-out forwards';
        }, index * 200); // Agregar un retraso para animar cada sección por separado
    });
}

// Detectar el evento de desplazamiento
let desplazamientoRealizado = false;

window.addEventListener('scroll', () => {
    if (!desplazamientoRealizado) {
        aplicarAnimacion();
        desplazamientoRealizado = true;
    }
});
// GENERAR LOGO DE LINKEDIN
function generateLinkedInLogo(div) {
  // Obtenemos el ancho y el alto del div.
  const width = div.offsetWidth;
  const height = div.offsetHeight;

  // Creamos una imagen con el logo de LinkedIn.
  const image = new Image();
  image.src = "https://static.licdn.com/scds/common/u/img/webcomponents/logo/linkedin_logo_green_2x.svg";

  // Ajustamos el tamaño de la imagen al div.
  image.width = width;
  image.height = height;

  // Agregamos la imagen al div.
  div.appendChild(image);
}  