// Boton principal
botonRandom = document.querySelector("#botonRandom")
botonRock = document.querySelector("#botonRock")
botonRick = document.querySelector("#botonRick")
botonArcoiris = document.querySelector("#botonArcoiris")
botonBomba = document.querySelector("#botonBomba")
checker = 0; 
funciones = [arcoiris, rickroll, rock, bombaNuclear, pianito];
let rick = 0;

// Trancision entre páginas
pianoo = document.querySelector("#Piano")
contenido = document.querySelector("#contenido")
todasLasFunciones = document.querySelector("#linkClick")

todasLasFunciones.addEventListener("click", (e) => {
    e.preventDefault()
    contenido.style.opacity = 0;
    setTimeout(() => {
        window.location.href = e.target.href;
    }, 1000);
})

pianoo.addEventListener("click", (e) => {
    e.preventDefault()
    contenido.style.opacity = 0;
    setTimeout(() => {
        window.location.href = e.target.href;
    }, 1000);
})

document.addEventListener('DOMContentLoaded', function () {
    contenido.style.opacity = 1;
});

botonRandom.addEventListener("click", () => {
    piano.innerHTML = " "
    if (checker == 0) {
        funcion = Math.floor(Math.random() * funciones.length);
        if ((funcion == 1) && (rick == 0)) {
            funciones[funcion]()
            rick = 10;
        } else if ((funcion == 1) && (rick !== 0)) {
            do {
                funcion = Math.floor(Math.random() * funciones.length);
            } while (funcion === 1)
            rick = rick - 1;
            console.log("se cambio la variable a: " + rick)
            funciones[funcion]()
        }
            funciones[funcion]()
    } else {
        funciones[funcion]()
    }
})

// Fondo arcoiris
var color = 0;
const colores = [red, orange, yellow, green, blue, violet, defaultColor];

function red(){
    document.body.classList.toggle("red")
    botonRandom.classList.toggle("btn-light")
}

function orange(){
    document.body.classList.toggle("orange")
}

function yellow(){
    document.body.classList.toggle("yellow")
    botonRandom.classList.toggle("btn-light")
}

function green(){
    document.body.classList.toggle("green")
}

function blue(){
    document.body.classList.toggle("blue")
}

function violet(){
    document.body.classList.toggle("violet")
    botonRandom.classList.toggle("btn-light")
}

function defaultColor(){
    document.body.classList.remove("red")
    document.body.classList.remove("orange")
    document.body.classList.remove("yellow")
    document.body.classList.remove("green")
    document.body.classList.remove("blue")
    document.body.classList.remove("violet")
    botonRandom.classList.remove("btn-light")
    document.body.classList.add("bgFondoNormal")
}

function arcoiris(){
    checker = 1;
    document.body.classList.remove("bgFondoNormal")
    colores[color]()
    if (color == 6) {
        color = 0;
        checker = 0;
    } else {
        color++
    }
    return color
}

// Funcion rickroll
textStop = document.querySelector("#text-stop");
audioRickroll = document.querySelector("#audio-rickroll");

function rickroll() {
    textStop.innerHTML = " Has sido rickrolleado";
    audioRickroll.play();
    botonRandom.disabled = true;
    setTimeout(() => {
        textStop.innerHTML = " ";
        botonRandom.disabled = false;
    }, 9000);
}

// Rock
textRock = document.querySelector("#text-rock")
gifRock = document.querySelector("#gif-rock")
audioRock = document.querySelector("#audio-rock")
btnStop = document.querySelector("#btn-stop")

function rock() {
    document.body.classList.add("rock")
    gifRock.src = "img/music.gif";
    textRock.innerHTML = "¡Es la hora del rock!";
    btnStop.innerHTML = "Stop";
    botonRandom.innerHTML = "";
    audioRock.play();
}

btnStop.addEventListener("click", () => {
    document.body.classList.remove("rock")
    gifRock.src = "";
    textRock.innerHTML = "";
    btnStop.innerHTML = "";
    botonRandom.innerHTML = "Clikeame!";
    audioRock.pause();
    audioRock.load();
})

//Bomba nuclear
bombaFondo = document.querySelector("#bombafondo")
audioExplosion = document.querySelector("#audio-explosion")
audioClick = document.querySelector("#audio-click")

function bombaNuclear(){
    botonRandom.disabled = true;
    botonRandom.classList.add("bombacontador")

    // Animacion del 3
    setTimeout(() => {
        botonRandom.innerHTML = "3";
    }, 250)
    setTimeout(() => {
        botonRandom.innerHTML = "3.";
    }, 500)
    setTimeout(() => {
        botonRandom.innerHTML = "3..";
    }, 750)
    setTimeout(() => {
        botonRandom.innerHTML = "3...";
    }, 1000)

    // Animacion del 2
    setTimeout(() => {
        botonRandom.innerHTML = "2";
    }, 1250)
    setTimeout(() => {
        botonRandom.innerHTML = "2.";
    }, 1500)
    setTimeout(() => {
        botonRandom.innerHTML = "2..";
    }, 1750)
    setTimeout(() => {
        botonRandom.innerHTML = "2...";
    }, 2000)

    // Animacion del 1
    setTimeout(() => {
        botonRandom.innerHTML = "1";
    }, 2250)
    setTimeout(() => {
        botonRandom.innerHTML = "1.";
    }, 2500)
    setTimeout(() => {
        botonRandom.innerHTML = "1..";
    }, 2750)
    setTimeout(() => {
        botonRandom.innerHTML = "1...";
    }, 3000)

    // Animacion de la bomba lanzada
    setTimeout(() => {
        botonRandom.classList.remove("bombacontador")
        botonRandom.classList.add("bombalanzado")
        audioClick.load()
        audioClick.play()
        botonRandom.innerHTML = "Bomba lanzada";
    }, 3250)
    setTimeout(() => {
        botonRandom.innerHTML = "Bomba lanzada.";
    }, 3500)
    setTimeout(() => {
        botonRandom.innerHTML = "Bomba lanzada..";
    }, 3750)
    setTimeout(() => {
        botonRandom.innerHTML = "Bomba lanzada...";
    }, 4000)

    // Animacion de la explosion
    setTimeout(() => {
        botonRandom.innerHTML = "";
        botonRandom.classList.remove("bombalanzado")
        botonRandom.disabled = false;
        bombaFondo.classList.add("bombafondo")
    }, 4100)
    setTimeout(() => {
        bombaFondo.classList.remove("bombafondo")
        document.body.classList.remove("bgFondoNormal")
        document.body.classList.add("bgFondoBomba")
        audioExplosion.load()
        audioExplosion.play()
    }, 4940)
    setTimeout(() => {
        document.body.classList.remove("bgFondoBomba")
        document.body.classList.add("bgFondoNormal")
        botonRandom.innerHTML = "Clikeame!";
    }, 5940)
}

// Piano
piano = document.querySelector("#Piano")

function pianito() {
    piano.innerHTML = "Generar pianito"
}

