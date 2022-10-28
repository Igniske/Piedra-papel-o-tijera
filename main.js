const valores = ["piedra", "papel", "tijera"];
var jugadorUno = null;
var jugadorDos = null;
var wins = 0;
var losses = 0;

var botonPiedra = document.getElementById("piedra")
var botonPapel= document.getElementById("papel")
var botonTijera = document.getElementById("tijera")
var resultado = document.getElementById("resultado")
var victorias = document.getElementById("victorias")
var derrotas = document.getElementById("derrotas")
var eleccionUno = document.getElementById("jugador-uno")
var eleccionDos = document.getElementById("jugador-dos")
var botonReset = document.getElementById("reset")


renderGames()

function renderGames(){
    victorias.innerHTML = wins;
    derrotas.innerHTML = losses;
}

function renderElecciones(){
    if(jugadorUno === "piedra"){
        eleccionUno.src = "piedra.jpg"
    } else if(jugadorUno === "papel"){
        eleccionUno.src = "papel.jpg"
    } else if(jugadorUno === "tijera"){
        eleccionUno.src = "tijera.jpg"
    } else{
        eleccionUno.src = "question.png"
    }

    if(jugadorDos === "piedra"){
        eleccionDos.src = "piedra.jpg";
    } else if(jugadorDos === "papel"){
        eleccionDos.src = "papel.jpg"
    } else if(jugadorDos === "tijera"){
        eleccionDos.src = "tijera.jpg"
    } else{
        eleccionDos.src = "question.png"
    }
}

function reset(){
jugadorUno = null;
jugadorDos = null;
wins = 0;
losses = 0;
renderElecciones();
renderGames();
}

function randomDos(){
    jugadorDos = valores[Math.floor(Math.random() * 3)]
    console.log(jugadorDos)
}

function resultadoRonda(){
    if(jugadorUno === jugadorDos){
        resultado.innerHTML = "Empate!"
    } else if(jugadorUno === "piedra" && jugadorDos === "tijera"){
        resultado.innerHTML = "Ganaste!"
        wins += 1;
    } else if(jugadorUno === "papel" && jugadorDos === "piedra"){
        resultado.innerHTML = "Ganaste!"
        wins += 1;
    } else if(jugadorUno === "tijera" && jugadorDos === "papel"){
        resultado.innerHTML = "Ganaste!"
        wins += 1;
    } else{
        resultado.innerHTML = "Perdiste :("
        losses += 1;
    }
}

botonPiedra.addEventListener("click", e =>{
    jugadorUno = valores[0]
    randomDos()
    resultadoRonda()
    renderGames()
    renderElecciones()
})

botonPapel.addEventListener("click", e =>{
    jugadorUno = valores[1]
    randomDos()
    resultadoRonda()
    renderGames()
    renderElecciones()
})

botonTijera.addEventListener("click", e =>{
    jugadorUno = valores[2]
    randomDos()
    resultadoRonda()
    renderGames()
    renderElecciones()
})

botonReset.addEventListener("click", e =>{
    reset();
})  