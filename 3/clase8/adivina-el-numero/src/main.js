import "./style.css";
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
const inputNumero = document.getElementById("numero");
const botonAdivinar = document.getElementById("adivinar");
const botonReiniciar = document.getElementById("reiniciar");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("intentos");

botonAdivinar.addEventListener("click", () => {

    const numeroJugador = parseInt(inputNumero.value);

    if (
        isNaN(numeroJugador) ||
        numeroJugador < 1 ||
        numeroJugador > 100
    ) {

        mensaje.textContent =
            "Ingresa un número válido entre 1 y 100.";

        mensaje.style.color = "red";

        return;

    }

    intentos++;

    contador.textContent = `Intentos: ${intentos}`;

    if (numeroJugador === numeroSecreto) {

        mensaje.textContent =
            "🎉 ¡Felicidades! Adivinaste el número.";

        mensaje.style.color = "green";

    }

    else if (numeroJugador < numeroSecreto) {

        mensaje.textContent =
            "El número es más alto.";

        mensaje.style.color = "blue";

    }

    else {

        mensaje.textContent =
            "El número es más bajo.";

        mensaje.style.color = "orange";

    }

});

botonReiniciar.addEventListener("click", () => {

    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    intentos = 0;

    contador.textContent = "Intentos: 0";

    mensaje.textContent = "";

    inputNumero.value = "";

});