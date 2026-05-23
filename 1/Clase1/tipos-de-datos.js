const valores = [
  42,
  'Veinticinco',
  -666,
  true,
  0,
  '',
  null,
  undefined
];

//en caso de falso
let falsoIncorrecto;
try {
  falsoIncorrecto = FALSE;
} catch (error) {
  falsoIncorrecto = "Error: FALSE no está definido";
}

function mostrarResultado(valor) {
  console.log(`Valor: ${valor} | Tipo: ${typeof valor}`);
}

valores.forEach(mostrarResultado);
//caso especial FALSE
console.log(`Valor: FALSE | Resultado: ${falsoIncorrecto}`);

//extra
mostrarResultado([]);
mostrarResultado({});
mostrarResultado(function() {});


//notas clases

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