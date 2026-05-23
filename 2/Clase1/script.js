// Elementos del DOM
const destinoInput = document.getElementById("destino");
const fechaInput = document.getElementById("fecha");
const transporteInput = document.getElementById("transporte");
const boton = document.getElementById("agregarBtn");
const listaViajes = document.getElementById("listaViajes");

// Arreglo de viajes
const viajes = [];

// Costos por destino
const costosDestino = {
    Paris: 1200,
    Tokyo: 1800,
    Mexico: 800,
    Madrid: 1000
};

// Costos por transporte
const costosTransporte = {
    avion: 500,
    autobus: 200,
    tren: 300
};

// Calcular costo
const calcularCosto = (destino, transporte) => {

    const costoDestino = costosDestino[destino] || 500;
    const costoTransporte = costosTransporte[transporte] || 0;

    return costoDestino + costoTransporte;
};

// Registrar viaje
const registrarDestino = () => {

    const destino = destinoInput.value;
    const fecha = fechaInput.value;
    const transporte = transporteInput.value;

    // Validación
    if (destino === "" || fecha === "") {
        alert("Completa todos los campos");
        return;
    }

    // Calcular costo
    const costo = calcularCosto(destino, transporte);

    // Crear objeto viaje
    const viaje = {
        destino,
        fecha,
        transporte,
        costo
    };

    // Guardar en arreglo
    viajes.push(viaje);

    // Mostrar itinerario
    mostrarItinerario();

    // Limpiar campos
    destinoInput.value = "";
    fechaInput.value = "";
};

// Mostrar viajes
const mostrarItinerario = () => {

    listaViajes.innerHTML = "";

    viajes.forEach((viaje, index) => {

        const contenedor = document.createElement("div");

        contenedor.innerHTML = `
            <hr>
            <p><strong>Viaje #${index + 1}</strong></p>
            <p>Destino: ${viaje.destino}</p>
            <p>Fecha: ${viaje.fecha}</p>
            <p>Transporte: ${viaje.transporte}</p>
            <p>Costo estimado: $${viaje.costo}</p>
        `;

        listaViajes.appendChild(contenedor);

    });
};

// Evento botón
boton.addEventListener("click", registrarDestino);