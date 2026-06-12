//rreglo de objetos con productos
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" }
];

//original
console.log("Productos originales:");
console.log(productos);

// productos menor a $100
const productosBaratos = productos.filter(producto => producto.precio < 100);

console.log("\nProductos con precio menor a $100:");
console.log(productosBaratos);

// ordenar fabéticamente 
const productosOrdenados = [...productosBaratos].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
);

console.log("\nProductos ordenados alfabéticamente:");
console.log(productosOrdenados);

// obtener solo nombres
const nombresProductos = productosOrdenados.map(producto => producto.nombre);

console.log("\nNombres de los productos:");
console.log(nombresProductos);

// ejemplo de reduce()
// Calcular el precio total de los productos baratos
const totalPrecio = productosBaratos.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
);

console.log("\nSuma total de los productos baratos:");
console.log("$" + totalPrecio);