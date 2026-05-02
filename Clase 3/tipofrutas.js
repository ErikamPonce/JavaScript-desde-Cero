//arreglo de frutas
let frutas = ["manzana", "pera", "manzana", "naranja", "pera", "manzana"];

let conteo = {};

// inicio de for
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    if (conteo[fruta]) {
        conteo[fruta]++;
    } else {
        conteo[fruta] = 1;
    }
}

// Resultados
console.log("Conteo de frutas:");
for (let fruta in conteo) {
    console.log(fruta + ": " + conteo[fruta]);
}

//apuntes de clase 
//crear una variable
let i = 0

while (i < 5) {
    console.log("Numero de vueltas: " + i);
    i++
}

//
let x = 0

while (x >= 10) {
    console.log("Numero de vueltas: " + x);
    x--
}

//do while se ejecuta al menos una vez, aunque la condicion sea falsa
let j = 1

do {
    console.log("Numero de vueltas: " + j);
    j++
}while (j <= 5)


//for
let arrayt = ['mango', 'durazno', 'uva']   
console.log(arrayt.length)

for (let index = 0; index < arrayt.length; index++) {
    console.element = arrayt[index];
    console.log(element);
}


//algoritmo que imprima los numero pares del 0 al 20
//i % 2 verifica si el número es par (sin residuo al dividir entre 2)
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//algoritmo con ciclo que sea la tabla de miltiplicar del 8
let numero = 8;

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

//mostrar los cuadrados de 1 al 10
//Recorre números del 1 al 10.
for (let i = 1; i <= 10; i++) {
  console.log(`${i}^2 = ${i * i}`);
}

//factorial de un numero 
let n = 5; // puedes cambiar el número
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log(`El factorial de ${n} es ${factorial}`);

//piramide con *
let filas = 5;

for (let i = filas; i > 0; i--) {
  let linea = "";
  
  for (let j = 0; j < i; j++) {
    linea += "*";
  }
  
  console.log(linea);
}