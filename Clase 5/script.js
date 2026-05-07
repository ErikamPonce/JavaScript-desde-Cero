// Array para almacenar libros
let librosLeidos = [];

// Función constructora de libros
function crearLibro(titulo, autor, anio, estado) {
    return {
        titulo: titulo,
        autor: autor,
        anio: anio,
        estado: estado,
        capitulos: [],

        describirLibro() {
            console.log(
                `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`
            );
        },

        agregarCapitulo(capitulo) {
            this.capitulos.push(capitulo);
            console.log(`Capítulo agregado: ${capitulo}`);
        },

        eliminarCapitulo(capitulo) {
            this.capitulos = this.capitulos.filter(
                c => c !== capitulo
            );
            console.log(`Capítulo eliminado: ${capitulo}`);
        }
    };
}

//agg libros al array
function agregarLibro(libro) {
    librosLeidos.push(libro);
    console.log(`Libro agregado: ${libro.titulo}`);
}

// mostrar todos los libros
function mostrarLibros() {
    console.log("Lista de libros:");

    if (librosLeidos.length === 0) {
        console.log("No hay libros registrados.");
        return;
    }

    librosLeidos.forEach((libro, index) => {
        console.log(`${index + 1}.`);
        libro.describirLibro();
    });
}

// Crear libros
const libro1 = crearLibro(
    "Eres el amor de mi otra vida",
    "Gilraen Eärfalas",
    2016,
    "disponible"
);

const libro2 = crearLibro(
    "No me llames loca",
    "Gilraen Eärfalas",
    2025,
    "prestado"
);

// Aggcapítulos
libro1.agregarCapitulo("Capítulo 1");
libro1.agregarCapitulo("Capítulo 2");

agregarLibro(libro1);
agregarLibro(libro2);
mostrarLibros();