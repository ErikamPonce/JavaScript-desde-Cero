//estar en nuestro DOWN
const titulo =  document.getElementById("Titulo");
//cambiar contenido de texto
Titulo.textContent = "Hola, javascript!";

//objeto 
Titulo={
    tag: 'p',
    texconternt: "Hola, chavos!"
}


//boton
function cambiarTexto(){ 
    document.getElementById("Titulo").textContent = "Holissss JS!";
}


//cambiar color
function cambiarColor(){
    document.getElementById("text").style.color = "red";
}

const boton = document.getElementById("boton");
//escuchar el evento 
boton.addEventListener("click", function (){
    alert("¡Hola, has hecho clic en el botón!")});

    function alertar(){
    alert("¡Hola, has hecho clic en el botón 2!");
    }

    function crearMensaje(){
        let mensaje = document.getElementById("mensaje").value;
        alert ("Hola " + mensaje);
    }

    //mandar el valor al html
function crearMensaje(){
    let mensaje = document.getElementById('mensaje').value
    document.getElementById("container").innerHTML += `<p>${mensaje}</p>`;
}

function modooscuro(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

let numero = 0
function sumar(){
    if(numero < 20){
        numero++
        document.getElementById("contador").textContent = numero;
    }
}