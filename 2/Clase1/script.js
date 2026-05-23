//Funciones flecha
function suma (a,b){
    return a+b;
}

const sumar = (x,y) => x + y;
console.log(sumar(8,2));

//un solo parametro
const cuadrado = numero => numero * numero;
console.log(cuadrado(5));

//sin parametros
const mensaje = () => 'Hola, soy una función flecha sin parámetros';
console.log(mensaje());

 const numeros = [1, 2, 3, 4, 5];
 const dobles = numeros.map(n => n * 2);
 console.log(dobles);

 //template literals
 const word1 = 'Hola';
 const word2 = 'Mundo';
 //${variable} para insertar variables dentro de una cadena de texto
console.log(`${word1} ${word2}!`); 

const ID = Symbol('id')
const clave = 'id'

const user = {
  nombre: 'Antonio',
  [id]: 123
}
console.log(user[ID]);