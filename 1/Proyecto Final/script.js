// Elementos del DOM
const input = document.getElementById("comentarioInput");
const boton = document.getElementById("agregarBtn");
const lista = document.getElementById("listaComentarios");
const mensaje = document.getElementById("mensaje");

// Función para mostrar mensajes
function mostrarMensaje(texto, color = "red") {
    mensaje.textContent = texto;
    mensaje.style.color = color;

    setTimeout(() => {
        mensaje.textContent = "";
    }, 2500);
}

// Función para crear comentarios
function agregarComentario() {
    const texto = input.value.trim();

    // Validar campo vacío
    if (texto === "") {
        mostrarMensaje("Escribe un comentario");
        return;
    }

    // Crear contenedor
    const nuevoComentario = document.createElement("article");
    nuevoComentario.classList.add("comentario");

    // Fecha actual
    const fecha = new Date().toLocaleString();

    // Estructura del comentario
    nuevoComentario.innerHTML = `
        <div class="comentario-header">
            <span class="fecha">${fecha}</span>
            <button class="eliminarBtn">✖</button>
        </div>

        <p>${texto}</p>
    `;

    // Agregar al DOM
    lista.prepend(nuevoComentario);

    // Limpiar input
    input.value = "";
    input.focus();

    // Evento eliminar
    const eliminarBtn = nuevoComentario.querySelector(".eliminarBtn");

    eliminarBtn.addEventListener("click", () => {
        nuevoComentario.remove();
    });
}

// Evento botón
boton.addEventListener("click", agregarComentario);

// Permitir agregar con Enter
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        agregarComentario();
    }
});
