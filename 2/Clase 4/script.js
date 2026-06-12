const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo", "alberto", "Alfredo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Comparar la inicial de ambos nombres
        if (arr[inicio][0] === arr[siguiente][0]) {
            return [arr[inicio], arr[siguiente]];
        }

        // Avanzar los punteros
        inicio++;
        siguiente++;
    }

    return null; // No se encontró ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]