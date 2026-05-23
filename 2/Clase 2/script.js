// Elementos del DOM
const productoInput = document.getElementById("productoInput");
const agregarBtn = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");

// Arreglo de compras
const listaDeCompras = [];

// Agregar producto
const agregarProducto = (producto) => {

    // Eliminar espacios vacíos
    producto = producto.trim();

    // Validar campo vacío
    if (producto === "") {
        alert("Escribe un producto");
        return;
    }

    // Evitar duplicados
    if (listaDeCompras.includes(producto)) {
        alert("El producto ya existe");
        return;
    }

    // Agregar producto
    listaDeCompras.push(producto);

    mostrarLista();
};

// Eliminar producto
const eliminarProducto = (producto) => {

    const index = listaDeCompras.indexOf(producto);

    if (index !== -1) {
        listaDeCompras.splice(index, 1);
    }

    mostrarLista();
};

// Mostrar lista
const mostrarLista = () => {

    lista.innerHTML = "";

    listaDeCompras.forEach((producto) => {

        const item = document.createElement("li");

        item.innerHTML = `
            ${producto}
            <button>Eliminar</button>
        `;

        // Botón eliminar
        const eliminarBtn = item.querySelector("button");

        eliminarBtn.addEventListener("click", () => {
            eliminarProducto(producto);
        });

        lista.appendChild(item);
    });
};

// Evento agregar
agregarBtn.addEventListener("click", () => {

    agregarProducto(productoInput.value);

    productoInput.value = "";
});