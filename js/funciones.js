// Boton principal
botonRandom = document.querySelector("#botonRandom")
checker = 0; 
funciones = [arcoiris, rickroll, rock];
let rick = 0;

botonRandom.addEventListener("click", () => {
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
}

function arcoiris(){
    checker = 1;
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
