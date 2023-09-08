// Boton principal
botonRandom = document.querySelector("#botonRandom")
botonRock = document.querySelector("#botonRock")
botonRick = document.querySelector("#botonRick")
botonArcoiris = document.querySelector("#botonArcoiris")
botonBomba = document.querySelector("#botonBomba")
checker = 0; 
funciones = [arcoiris, rickroll, rock, bombaNuclear];
let rick = 0;

botonRock.addEventListener("click", () => {
    rock()
})

botonRick.addEventListener("click", () => {
    rickroll()
})

botonArcoiris.addEventListener("click", () => {
    arcoiris()

    if (checker == 1) {
        botonRock.innerHTML = "";
        botonRick.innerHTML = "";
        botonBomba.innerHTML = "";
        titulo.innerHTML = " ";
        botonArcoiris.classList.add("btn-main")
    } else {
        botonRock.innerHTML = "Hora del Rock";
        botonRick.innerHTML = "RickRoll";
        botonArcoiris.innerHTML = "Arcoiris";
        botonBomba.innerHTML = "Bomba Nuclear";
        titulo.innerHTML = "Eventos";
        botonArcoiris.classList.remove("btn-main")
    }
})

botonBomba.addEventListener("click", () => {
    bombaNuclear()
})

// Fondo arcoiris
var color = 0;
const colores = [red, orange, yellow, green, blue, violet, defaultColor];

function red(){
    document.body.classList.toggle("red")
    botonRock.classList.toggle("btn-light")
    botonRick.classList.toggle("btn-light")
    botonArcoiris.classList.toggle("btn-light")
    botonBomba.classList.toggle("btn-light")
}

function orange(){
    document.body.classList.toggle("orange")
}

function yellow(){
    document.body.classList.toggle("yellow")
    botonRock.classList.toggle("btn-light")
    botonRick.classList.toggle("btn-light")
    botonArcoiris.classList.toggle("btn-light")
    botonBomba.classList.toggle("btn-light")
}

function green(){
    document.body.classList.toggle("green")
}

function blue(){
    document.body.classList.toggle("blue")
}

function violet(){
    document.body.classList.toggle("violet")
    botonRock.classList.toggle("btn-light")
    botonRick.classList.toggle("btn-light")
    botonArcoiris.classList.toggle("btn-light")
    botonBomba.classList.toggle("btn-light")
}

function defaultColor(){
    document.body.classList.remove("red")
    document.body.classList.remove("orange")
    document.body.classList.remove("yellow")
    document.body.classList.remove("green")
    document.body.classList.remove("blue")
    document.body.classList.remove("violet")
    botonRock.classList.remove("btn-light")
    botonRick.classList.remove("btn-light")
    botonArcoiris.classList.remove("btn-light")
    botonBomba.classList.remove("btn-light")
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
    botonRick.disabled = true;
    botonRock.disabled = true;
    botonArcoiris.disabled = true;
    botonBomba.disabled = true;
    setTimeout(() => {
        textStop.innerHTML = " ";
        botonRick.disabled = false;
        botonRock.disabled = false;
        botonArcoiris.disabled = false;
        botonBomba.disabled = false;
    }, 9000);
}

// Rock
textRock = document.querySelector("#text-rock")
gifRock = document.querySelector("#gif-rock")
audioRock = document.querySelector("#audio-rock")
btnStop = document.querySelector("#btn-stop")
titulo = document.querySelector("#titulo")

function rock() {
    document.body.classList.add("rock")
    gifRock.src = "img/music.gif";
    textRock.innerHTML = "¡Es la hora del rock!";
    btnStop.innerHTML = "Stop";
    botonRock.innerHTML = "";
    botonRick.innerHTML = "";
    botonArcoiris.innerHTML = "";
    botonBomba.innerHTML = "";
    titulo.innerHTML = " ";
    audioRock.play();
}

btnStop.addEventListener("click", () => {
    document.body.classList.remove("rock")
    gifRock.src = "";
    textRock.innerHTML = "";
    btnStop.innerHTML = "";
    botonRock.innerHTML = "Hora del Rock";
    botonRick.innerHTML = "RickRoll";
    botonArcoiris.innerHTML = "Arcoiris";
    botonBomba.innerHTML = "Bomba Nuclear";
    titulo.innerHTML = "Eventos";
    audioRock.pause();
    audioRock.load();
})

//Bomba nuclear
bombaFondo = document.querySelector("#bombafondo")
audioExplosion = document.querySelector("#audio-explosion")
audioClick = document.querySelector("#audio-click")

function bombaNuclear(){
    botonBomba.disabled = true;
    botonRock.innerHTML = "";
    botonRick.innerHTML = "";
    botonArcoiris.innerHTML = "";
    titulo.innerHTML = " ";
    botonBomba.classList.add("btn-main")
    botonBomba.classList.add("bombacontador")

    // Animacion del 3
    setTimeout(() => {
        botonBomba.innerHTML = "3";
    }, 250)
    setTimeout(() => {
        botonBomba.innerHTML = "3.";
    }, 500)
    setTimeout(() => {
        botonBomba.innerHTML = "3..";
    }, 750)
    setTimeout(() => {
        botonBomba.innerHTML = "3...";
    }, 1000)

    // Animacion del 2
    setTimeout(() => {
        botonBomba.innerHTML = "2";
    }, 1250)
    setTimeout(() => {
        botonBomba.innerHTML = "2.";
    }, 1500)
    setTimeout(() => {
        botonBomba.innerHTML = "2..";
    }, 1750)
    setTimeout(() => {
        botonBomba.innerHTML = "2...";
    }, 2000)

    // Animacion del 1
    setTimeout(() => {
        botonBomba.innerHTML = "1";
    }, 2250)
    setTimeout(() => {
        botonBomba.innerHTML = "1.";
    }, 2500)
    setTimeout(() => {
        botonBomba.innerHTML = "1..";
    }, 2750)
    setTimeout(() => {
        botonBomba.innerHTML = "1...";
    }, 3000)

    // Animacion de la bomba lanzada
    setTimeout(() => {
        botonBomba.classList.remove("bombacontador")
        botonBomba.classList.add("bombalanzado")
        audioClick.load()
        audioClick.play()
        botonBomba.innerHTML = "Bomba lanzada";
    }, 3250)
    setTimeout(() => {
        botonBomba.innerHTML = "Bomba lanzada.";
    }, 3500)
    setTimeout(() => {
        botonBomba.innerHTML = "Bomba lanzada..";
    }, 3750)
    setTimeout(() => {
        botonBomba.innerHTML = "Bomba lanzada...";
    }, 4000)

    // Animacion de la explosion
    setTimeout(() => {
        botonBomba.innerHTML = "";
        botonBomba.classList.remove("bombalanzado")
        botonBomba.disabled = false;
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
        botonBomba.classList.remove("btn-main")
        document.body.style.backgroundColor = "#fff"
        botonRock.innerHTML = "Hora del Rock";
        botonRick.innerHTML = "RickRoll";
        botonArcoiris.innerHTML = "Arcoiris";
        botonBomba.innerHTML = "Bomba Nuclear";
        titulo.innerHTML = "Eventos";

    }, 5940)
}