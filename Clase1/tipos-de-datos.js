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