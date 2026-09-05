// =====================================================
// BOTÓN VOLVER ARRIBA
// =====================================================

const btnArriba = document.getElementById("btnArriba");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        btnArriba.classList.add("mostrar");

    } else {

        btnArriba.classList.remove("mostrar");

    }

});



btnArriba.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// =====================================================
// NAVEGACIÓN DE CATEGORÍAS
// =====================================================

document
    .querySelectorAll(".categorias a")
    .forEach(function (enlace) {

        enlace.addEventListener("click", function (evento) {

            evento.preventDefault();


            const destino = document.querySelector(
                this.getAttribute("href")
            );


            if (destino) {

                destino.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });