// Seleccionar elementos
tecla =  document.querySelectorAll(".tecla")
notaMusical =  document.querySelectorAll(".notaMusical")

// Convertir en array
tecla = Array.from(tecla)
notaMusical = Array.from(notaMusical)

//Diccionario
letras = {
    'a': 65,
    'w': 87,
    's': 83,
    'e': 69,
    'd': 68,
    'f': 70,
    't': 84,
    'g': 71,
    'y': 89,
    'h': 72,
    'u': 85,
    'j': 74,
    'k': 75,
    'o': 79,
    'l': 76
}

// Logica para el teclado
function tocarNota(indice) {
    if (indice >= 0 && (indice < notaMusical.length || indice < tecla.length)) {
        notaMusical[indice].load();
        notaMusical[indice].addEventListener("canplaythrough", function () {
            notaMusical[indice].play();
        });
        notaMusical[indice].addEventListener("error", function () {
            console.error("Error al cargar el audio.");
        });

        const codigoTecla = event.keyCode;


        if ([65, 83, 68, 70, 71, 72, 74, 75, 76].includes(codigoTecla)) {
            tecla[indice].classList.add("blancaPresionada")
                setTimeout(() => {
                    tecla[indice].classList.remove("blancaPresionada")
                }, 100)
        }


        if ([87, 69, 84, 89, 85, 79].includes(codigoTecla)) {
            tecla[indice].classList.add("negraPresionada")
                setTimeout(() => {
                    tecla[indice].classList.remove("negraPresionada")
                }, 100)
        }
    }
}

document.addEventListener("keydown", (event) => {
    if (event.keyCode == letras['a']) {
        tocarNota(0)
        console.log("Presionaste la a");
    }

    if (event.keyCode == letras['w']) {
        tocarNota(1)
        console.log("Presionaste la w");
    }

    if (event.keyCode == letras['s']) {
        tocarNota(2)
        console.log("Presionaste la s");
    }

    if (event.keyCode == letras['e']) {
        tocarNota(3)
        console.log("Presionaste la e");
    }

    if (event.keyCode == letras['d']) {
        tocarNota(4)
        console.log("Presionaste la d");
    }

    if (event.keyCode == letras['f']) {
        tocarNota(5)
        console.log("Presionaste la f");
    }
    
    if (event.keyCode == letras['t']) {
        tocarNota(6)
        console.log("Presionaste la t");
    }
    
    if (event.keyCode == letras['g']) {
        tocarNota(7)
        console.log("Presionaste la g");
    }
    
    if (event.keyCode == letras['y']) {
        tocarNota(8)
        console.log("Presionaste la y");
    }
    
    if (event.keyCode == letras['h']) {
        tocarNota(9)
        console.log("Presionaste la h");
    }
    
    if (event.keyCode == letras['u']) {
        tocarNota(10)
        console.log("Presionaste la u");
    }
    
    if (event.keyCode == letras['j']) {
        tocarNota(11)
        console.log("Presionaste la j");
    }
    
    if (event.keyCode == letras['k']) {
        tocarNota(12)
        console.log("Presionaste la k");
    }
    
    if (event.keyCode == letras['o']) {
        tocarNota(13)
        console.log("Presionaste la o");
    }
    
    if (event.keyCode == letras['l']) {
        tocarNota(14)
        console.log("Presionaste la l");
    }

});

// Logica Boton

for (let i = 0; i < tecla.length; i++) {
    (function (indice) {
        tecla[indice].addEventListener("click", () => {
            if (indice >= 0 && (indice < notaMusical.length || indice < tecla.length)) {
                notaMusical[indice].load();
                
                notaMusical[indice].addEventListener("canplaythrough", function () {
                    notaMusical[indice].play();
                });
                notaMusical[indice].addEventListener("error", function () {
                    console.error("Error al cargar el audio.");
                });

                const codigoTecla = indice;


                if ([0,2,4,5,7,9,11,12,14].includes(codigoTecla)) {
                    tecla[indice].classList.add("blancaPresionada")
                        setTimeout(() => {
                            tecla[indice].classList.remove("blancaPresionada")
                        }, 100)
                }


                if ([1,3,6,8,10,13].includes(codigoTecla)) {
                    tecla[indice].classList.add("negraPresionada")
                        setTimeout(() => {
                            tecla[indice].classList.remove("negraPresionada")
                        }, 100)
                }
            }
        });
    })(i);
}

// En caso de celular por si esta en vertical que lo ponga en horizontal
advertencia = document.querySelector("#Advertencia")



if (/Mobi|Android/i.test(navigator.userAgent)) {
    function handleOrientation() {
    if (window.orientation === 0 || window.orientation === 180) {
        console.log("Esta en vertical")
        advertencia.textContent = "Para poder jugar con el piano tiene que estar su dispositivo en horizontal. Disculpa la molestia..."
        for (let indice = 0; indice < tecla.length; indice++) {
            const codigoTecla = indice;

            if ([0,2,4,5,7,9,11,12,14].includes(codigoTecla)) {
                tecla[indice].classList.remove("blanca")
            }


            if ([1,3,6,8,10,13].includes(codigoTecla)) {
                tecla[indice].classList.remove("negra")
            }
        }
    } 
    
    else if (window.orientation === 90 || window.orientation === -90) {
        console.log("Esta en horizontal")
        advertencia.textContent = " "
        for (let indice = 0; indice < tecla.length; indice++) {
            const codigoTecla = indice;

            if ([0,2,4,5,7,9,11,12,14].includes(codigoTecla)) {
                tecla[indice].classList.add("blanca")
            }


            if ([1,3,6,8,10,13].includes(codigoTecla)) {
                tecla[indice].classList.add("negra")
            }
        }
        }
    }

// Agregar un listener para el evento "orientationchange"
window.addEventListener("orientationchange", handleOrientation);

handleOrientation()
} else {
    for (let indice = 0; indice < tecla.length; indice++) {
        const codigoTecla = indice;

        if ([0,2,4,5,7,9,11,12,14].includes(codigoTecla)) {
            tecla[indice].classList.add("blanca")
        }


        if ([1,3,6,8,10,13].includes(codigoTecla)) {
            tecla[indice].classList.add("negra")
        }
    }
}

// Transicion entre paginas
volver = document.querySelector("#volver")
contenido = document.querySelector("#contenido")

volver.addEventListener("click", (e) => {
    e.preventDefault()
    contenido.style.opacity = 0;
    setTimeout(() => {
        window.location.href = e.target.href;
    }, 1000);
})

document.addEventListener('DOMContentLoaded', function () {
    contenido.style.opacity = 1;
});