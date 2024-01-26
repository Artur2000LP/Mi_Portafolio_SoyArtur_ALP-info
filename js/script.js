
const cloud = document.getElementById('cloud');
const barraLateral = document.querySelector('.barra-lateral')
const spans = document.querySelectorAll('span');
const interuptor = document.querySelector('.switch');
const circulo = document.querySelector('.circulo');
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

/*mousemove */

document.addEventListener("DOMContentLoaded", function () {
    var miAudio = document.getElementById("miAudio");
    if (!localStorage.getItem("audioReproducido")) {
        miAudio.play();
        localStorage.setItem("audioReproducido", "true");
    }

    //desplazamiento suave 
    document.querySelectorAll('.navegacion a').forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();

            const destinoId = this.getAttribute('href').substring(1);
            const destinoElemento = document.getElementById(destinoId);

            if (destinoElemento) {
                window.scrollTo({
                    top: destinoElemento.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});




menu.addEventListener("click", () => {
    barraLateral.classList.toggle("max-barra-lateral");
    if (barraLateral.classList.contains("max-barra-lateral")) {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    } else {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if (window.innerWidth <= 320) {
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span) => {
            span.classList.add("oculto");
        });
    }

});

interuptor.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
});

cloud.addEventListener("click", () => {
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span) => {
        span.classList.toggle("oculto")
    });


});

function seleccionarOpcion(id) {
    var opciones = document.querySelectorAll('.navegacion a');

    opciones.forEach(function (opcion) {
        opcion.classList.remove('selected');
    });

    var opcionSeleccionada = document.getElementById(id);
    opcionSeleccionada.classList.add('selected');
}

function voltearTarjeta(tarjeta) {
    tarjeta.classList.toggle('hover');
}

/*sobre mi --- */
function eliminarParteTexto(idElemento, parteTexto) {
    var elemento = document.getElementById(idElemento);

    if (!elemento) {
      console.error("Elemento no encontrado.");
      return;
    }

    var contenido = elemento.innerHTML;
    var indiceInicio = contenido.indexOf(parteTexto);

    if (indiceInicio !== -1) {
      var nuevoContenido = contenido.substring(indiceInicio + parteTexto.length);

      elemento.innerHTML = nuevoContenido;
    } else {
      console.log("No se encontró la parte del texto a eliminar.");
    }
  }

  function verificarAnchoYEliminar() {
    var anchoVentana = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (anchoVentana < 320) {
      eliminarParteTexto("sobremiParrafo", "Me encanta crear experiencias en línea únicas y atractivas,");
    }
  }

  // Llama a la función al cargar la página y cuando cambia el tamaño de la ventana
  window.addEventListener('load', verificarAnchoYEliminar);
  window.addEventListener('resize', verificarAnchoYEliminar);

/* carrusel  */

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 14500,
        disableOnInteraction: false
    },
    breakpoints: {
        "@0.30": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.60": {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        "@0.80": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@1.20": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.40": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@2.00": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    },
});


// galeria de Certificados 
var swiper = new Swiper(".mySwiper_Galeria", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});

/*contactos  */
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || correo === '' || mensaje === '') {
        document.getElementById('camposVacios').style.display = 'block';
        setTimeout(() => {
            document.getElementById('camposVacios').style.display = 'none';
        }, 5000);
        return false;
    }

    document.getElementById('confirmacion').style.display = 'block';
    setTimeout(() => {
        document.getElementById('confirmacion').style.display = 'none';
    }, 5000);

    document.querySelector('.formulario').submit();

    // Limpiar los campos después del envío exitoso

    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('mensaje').value = '';

    return false;
}