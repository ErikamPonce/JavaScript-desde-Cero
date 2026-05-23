//Entregable: libros leídos
// Array de almacenamiento
let librosLeidos = [];


function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro agregado: ${titulo}`);
}


function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    
    if (librosLeidos.length === 0) {
        console.log("Aún no has agregado libros.");
        return;
    }
    librosLeidos.forEach((libro, index) => {
        console.log(`${index + 1}. ${libro}`);
    });
}


agregarLibro("Eres el amor de mi otra vida");
agregarLibro("No me llames loca");
agregarLibro("Cartas que no llegaron");

mostrarLibrosLeidos();



//Apuntes de clase
//funciones, bloques de codigo con cierto valor de entrada y un valor de salida, se pueden reutilizar
//organizar,reutilizar y optimizar programas
//function nombreFuncion(parametros/variables){cuerpo}
//argumento y parametro, el argumento es el valor que se le da a la funcion y el parametro es la variable que recibe ese valor


//funcion con parametros y con valor de retorno
function sumar (x, y) {
    let resultado = x + y;
    return resultado;
}

console.log(sumar(5, 3));

//funcion sin parametros y sin valor de retorno
function saludar(){
    console.log("Holis");
}
saludar()

//funcion expresada, se asigna a una variable
let multiplicar = function(a, b) {
    return a * b;
}
console.log(multiplicar(4, 6));


//Ejercicios practicos
// 1. Calcular el área de un triángulo
function areaTriangulo(b, a) {
    // Fórmula del área del triángulo: (base * altura) / 2
    let area = (b * a) / 2;
    return area;
}
console.log(areaTriangulo(5, 10)); 

//2. funcion que reciba 3 numero y que saque la multiplicacion de ellos y cual es el mayor
function multiplicarYMayor(a, b, c) {
    let multiplicacion = a * b * c;
    let mayor = Math.max(a, b, c);

    return {
        multiplicacion: multiplicacion,
        mayor: mayor
    };
}
console.log(multiplicarYMayor(2, 5, 3));

//3. funcion que pueda resivir el nombre de una persona y saludar 
function saludar(nombre) {
    return "Hola, " + nombre;
}
console.log(saludar("Alice"));

//4. cajero automatico (pasaslo a que este usando funciones)
//===: igualdad estricta
let saldo = 1000;

function cajero() {
    let opcion = parseInt(prompt(
`1. Consultar saldo
2. Depositar
3. Retirar
4. Salir`
    ));

    if (opcion === 1) {
        alert("Saldo: $" + saldo);

    } else if (opcion === 2) {
        let deposito = parseFloat(prompt("Cantidad a depositar:"));
        saldo += deposito;
        alert("Nuevo saldo: $" + saldo);

    } else if (opcion === 3) {
        let retiro = parseFloat(prompt("Cantidad a retirar:"));
        saldo -= retiro;
        alert("Nuevo saldo: $" + saldo);

    } else if (opcion === 4) {
        alert("Adiós");

    } else {
        alert("Opción no válida");
    }
}

cajero();

//5. crea una funcion que dibida dos numeros
function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir entre 0";
    } else {
        return "Resultado de la división:" + (a / b);
    }
}
console.log(dividir(10, 0));

//6. funcion que diga si un numero es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return numero + " es par";
    } else {
        return numero + " es impar";
    }
}
console.log(esParOImpar(7));