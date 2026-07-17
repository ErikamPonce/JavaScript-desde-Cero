const readline = require("readline");

let biblioteca = {
    libros: [
        {
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            genero: "Realismo mágico",
            disponible: true
        },
        {
            titulo: "1984",
            autor: "George Orwell",
            genero: "Distopía",
            disponible: true
        }
    ]
};


// Interfaz de consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Simular lectura de datos
function leerDatos(callback) {
    setTimeout(() => {
        callback(biblioteca);
    }, 1000);
}

// Simular escritura de datos
function escribirDatos(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}


// Mostrar libros
function mostrarLibros(callback) {

    leerDatos((datos) => {

        console.log("\n===== INVENTARIO =====");

        datos.libros.forEach((libro, index) => {

            console.log(`${index + 1}. ${libro.titulo}`);
            console.log(`   Autor: ${libro.autor}`);
            console.log(`   Género: ${libro.genero}`);
            console.log(`   Estado: ${libro.disponible ? "Disponible" : "Prestado"}\n`);

        });

        if (callback) callback();

    });

}


// Agregar libro

function agregarLibro(callback) {

    rl.question("Título: ", (titulo) => {

        rl.question("Autor: ", (autor) => {

            rl.question("Género: ", (genero) => {

                biblioteca.libros.push({
                    titulo,
                    autor,
                    genero,
                    disponible: true
                });

                escribirDatos(() => {

                    console.log("\nLibro agregado correctamente.");

                    if (callback) callback();

                });

            });

        });

    });

}


// Actualizar disponibilidad

function actualizarDisponibilidad(callback) {

    rl.question("Título del libro: ", (titulo) => {

        const libro = biblioteca.libros.find(
            l => l.titulo.toLowerCase() === titulo.toLowerCase()
        );

        if (!libro) {

            console.log("\nLibro no encontrado.");

            if (callback) callback();

            return;
        }

        rl.question(
            "Estado (1 = Disponible, 2 = Prestado): ",
            (estado) => {

                libro.disponible = estado === "1";

                escribirDatos(() => {

                    console.log("\nDisponibilidad actualizada.");

                    if (callback) callback();

                });

            }
        );

    });

}


// Menú principal

function menu() {

    console.log("\n===== BIBLIOTECA =====");
    console.log("1. Consultar libros");
    console.log("2. Agregar libro");
    console.log("3. Actualizar disponibilidad");
    console.log("4. Salir");

    rl.question("\nSeleccione una opción: ", (opcion) => {

        switch(opcion){

            case "1":

                mostrarLibros(menu);

            break;

            case "2":

                agregarLibro(menu);

            break;

            case "3":

                actualizarDisponibilidad(menu);

            break;

            case "4":

                console.log("\nHasta luego.");

                rl.close();

            break;

            default:

                console.log("\nOpción no válida.");

                menu();

        }

    });

}


// Iniciar programa

menu();