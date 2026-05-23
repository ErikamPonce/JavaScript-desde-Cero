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

//if
let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad");}

//if-else
    let temperatura = 23;
if (temperatura > 25) {
    console.log("Hace calor");
} else {
    console.log("Hace frío");
}
//else-if
let calificacion = 60;
if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 75) {
    console.log("Buena");
}else {
    console.log("Reprobado");
}

//opcion multiple "Switch"
let dia = 5;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");  
        break;
    case 4:
        console.log("Miércoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    //si la opción no coincide con ningún caso, se ejecutará el bloque default
    default:
        console.log("Otro día");
        break;
}

//operador ternario: es la funcion y dos posibles resultados, dependiendo de si la condición es verdadera o falsa
let numero = -2;
//?: esta evaluando si el numero es mayor o igual a 0
numero >= 0 ? console.log("Número positivo") : console.log("Número negativo");
//tambien puede se
//verdadero es "positivo", falso es "negativo"
let resultado = numero >= 0 ? 'positivo' : 'negativo';
console.log(resultado);




//Ejercicio alternativo
//1. clasificar las etapas del humani 0-12 niño, 13-17 adolescente, 18-60 adulto
let edad = 80;

if (edad >= 0 && edad <= 12) {
    console.log("Niño");
} else if (edad >= 13 && edad <= 17) {
    console.log("Adolescente");
} else if (edad >= 18 && edad <= 60) {
    console.log("Adulto");
} else if (edad > 60) {
    console.log("Adulto mayor");
} else {
    console.log("Edad no válida");
}
//2. ten 3 numeros y muestra cual es el mayor, el menor 
let n1 = 15;
let n2 = 10;
let n3 = 5;

//el match.max() devuelve el mayor de cero o más números
let mayor = Math.max(n1, n2, n3);
let menor = Math.min(n1, n2, n3);

console.log("Mayor:", mayor);
console.log("Menor:", menor);
//3. pide los 3 lados de untriangulo y determina si es equilatero, isosceles o escaleno
let a = 10;
let b = 15;
let c = 20;

//===  igualdad estricta (mismo valor y mismo tipo)
//&& AND
//a es igual a b Y b es igual a c
if (a === b && b === c) {
    console.log("Triángulo equilátero");
    //||=or   al menos dos lados son iguales

} else if (a === b || a === c || b === c) {
    console.log("Triángulo isósceles");
    //si no se cumple ninguna de las condiciones anteriores, entonces es escaleno
} else {
    console.log("Triángulo escaleno");
}
//4. pide un usuario y contraseña y determina si tiene acceso o no
let usuario = "admin";
let password = "12345";

const USER_CORRECTO = "admin";
const PASS_CORRECTO = "1234";

if (usuario === USER_CORRECTO && password === PASS_CORRECTO) {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}