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



//Apuntes de clase 
//propiedades: caracteristicas de algo 
//objeto: molde de un objeto, es una plantilla para crear objetos individuales con las mismas propiedades y métodos.
//POO

const persona = {
    nombre: "Juan",
    edad: 30, 
    nacionalidad: "Mexicana",
    altura: 1.70,
    sexo: "Masculino",  
    direccion: {
        calle: "Calle Falsa",
        numero: 123,
        ciudad: "Ciudad de México",
        pais: "México"
    },
    materias: ["Matemáticas", "Ciencias", "Historia"],

    saludar() {
        console.log(`Hola`);
    }
}
persona.saludar();
console.log(persona.direccion.ciudad);
console.log(persona.materias[1]);


//constructura
function persona (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.saludar = function() {
        console.log(`Hola, soy` + this.nombre + ` y tengo ` + this.edad + ` años.`);
    }
}

let persona1 = new persona("Amé", 15);
console.log(persona1.nombre);

//añadiendo atributos 
persona.email= 'juan@example.com'
console.log(persona);


let frutas = ["Manzana", "Platano", "Naranja"];
for (const fruta of frutas){
    console.log(fruta);
}

for (const propuedad in persona) {
    console.log(propuedad);
}

//funciones anonimas
const saludar = function() {
    console.log("Holiss");
}

//funcion arrow
const suma =(x, y)=> {
    return x + y;
}
console.log(suma(5, 3));
//funciones flecha
const sumar = (a, b) => a + b;

const alumno = {
    nombre: "Ana",
    edad: 20,   
    status: "reprobado",
}

const json=JSON.stringify(alumno);
console.log(json);

const objeto = JSON.parse(json);
console.log(objeto);