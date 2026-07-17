//aqui se hace la peticion a la API de Rick and Morty y se muestran los personajes en el contenedor
const API = "https://rickandmortyapi.com/api/character";
//aqui contendra los personajes obtenidos de la API
const container = document.getElementById("data-container");
//swui contendra los botones para hacer la peticion con fetch 
const fetchBtn = document.getElementById("fetchBtn");
//aqui contendra el boton para hacer la peticion con axios 
const axiosBtn = document.getElementById("axiosBtn");

// Mostrar personajes

function mostrarPersonajes(personajes){

    container.innerHTML = "";
    
    personajes.forEach(personaje=>{

        container.innerHTML += `

        <div class="card">

            <img src="${personaje.image}" alt="${personaje.name}">

            <h3>${personaje.name}</h3>

            <p>${personaje.species}</p>

            <p>${personaje.status}</p>

        </div>

        `;

    });

}


// FETCH

async function obtenerConFetch(){

    try{

        const respuesta = await fetch(API);

        const datos = await respuesta.json();

        mostrarPersonajes(datos.results);

    }

    catch(error){

        container.innerHTML = "<h2>Error al obtener datos con Fetch.</h2>";

        console.error(error);

    }

}

// AXIOS

async function obtenerConAxios(){

    try{

        const respuesta = await axios.get(API);

        mostrarPersonajes(respuesta.data.results);

    }

    catch(error){

        container.innerHTML = "<h2>Error al obtener datos con Axios.</h2>";

        console.error(error);

    }

}

// Eventos

fetchBtn.addEventListener("click",obtenerConFetch);

axiosBtn.addEventListener("click",obtenerConAxios);