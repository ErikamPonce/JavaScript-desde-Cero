 // Obtener elementos del DOM
        const input = document.getElementById("comentarioInput");
        const boton = document.getElementById("agregarBtn");
        const lista = document.getElementById("listaComentarios");

        // Evento click del botón
        boton.addEventListener("click", function () {

            // Obtener texto
            const texto = input.value;

            // Validar que no esté vacío
            if (texto.trim() === "") {
                alert("Escribe un comentario");
                return;
            }

            // Crear contenedor del comentario
            const nuevoComentario = document.createElement("div");
            nuevoComentario.classList.add("comentario");

            // Fecha y hora
            const fecha = new Date().toLocaleString();

            // Agregar contenido
            nuevoComentario.innerHTML = `
                <p>${texto}</p>
                <small>${fecha}</small>
                <br>
                <button class="eliminarBtn">Eliminar</button>
            `;

            // Agregar comentario al DOM
            lista.appendChild(nuevoComentario);

            // Limpiar input
            input.value = "";

            // Botón eliminar
            const eliminarBtn = nuevoComentario.querySelector(".eliminarBtn");

            eliminarBtn.addEventListener("click", function () {
                nuevoComentario.remove();
            });

        });



















//Auntes clase 6
//estar en nuestro DOWN
// const titulo =  document.getElementById("Titulo");
//cambiar contenido de texto
// Titulo.textContent = "Hola, javascript!";

//objeto 
// Titulo={
//     tag: 'p',
//     texconternt: "Hola, chavos!"
// }


//boton
// function cambiarTexto(){ 
//     document.getElementById("Titulo").textContent = "Holissss JS!";
// }


//cambiar color
// function cambiarColor(){
//     document.getElementById("text").style.color = "red";
// }

// const boton = document.getElementById("boton");
//escuchar el evento 
// boton.addEventListener("click", function (){
//     alert("¡Hola, has hecho clic en el botón!")});

    // function alertar(){
    // alert("¡Hola, has hecho clic en el botón 2!");
    // }

    // function crearMensaje(){
    //     let mensaje = document.getElementById("mensaje").value;
    //     alert ("Hola " + mensaje);
    // }

    //mandar el valor al html
// function crearMensaje(){
//     let mensaje = document.getElementById('mensaje').value
//     document.getElementById("container").innerHTML += `<p>${mensaje}</p>`;
// }

// function modooscuro(){
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
// }

// let numero = 0
// function sumar(){
//     if(numero < 20){
//         numero++
//         document.getElementById("contador").textContent = numero;
//     }
// }