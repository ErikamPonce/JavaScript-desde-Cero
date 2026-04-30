// variable que almacenará la nota del estudiante
let nota = 85;

// Validar que la nota sea mayor o igual a 0
if (nota >= 0 && nota <= 100) {
    console.log("Su nota es: " + nota);

    if (nota >= 90) {
        console.log("Excelente");
    } else if (nota >= 75) {
        console.log("Buena");
    } else if (nota >= 60) {
        console.log(" Suficiente ");
    } else {
        console.log(" No aprobado ");
    }

} else {
    console.log("Error: La nota debe estar entre 0 y 100");
}


//apuentes clases

//declarando una variable puntuacion
let puntuacion = 56
//reasignando el valor de la variable puntuacion
puntuacion= 60
//imprimiendo el valor de la variable puntuacion
console.log(puntuacion);


const pais= "Colombia"
pais= "Argentina"
//Concatenacion de texto con la variable
console.log("El país es: " + pais);


//boleanos
let activo= true
let inactivo= false

//indefinido
let x
console.log(x); // Imprime undefined

//nulo
let y = null
console.log(y); 

//objetos
let persona = {
    nombre: "Juan",
    edad: 30,
    activo: true   
}
console.log(persona.nombre); // Solo imprime "Juan", osea el nombre de la persona

//arreglos
let frutas = ["manzana", "banana", "naranja"]
console.log(frutas[0]); // Imprime "manzana", osea la primera fruta del arreglo

//matrices
let frutasMatriz = [["manzana", "banana", "naranja"], ["fresa", "granada", "cereza"]]
console.log(frutasMatriz[0][0]); // Imprime "fresa", osea la primera fruta de la segunda fila de la matriz  

//funciones
function saludar() {
    return "Hola mundo";
}
saludar(); 