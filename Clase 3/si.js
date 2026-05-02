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

