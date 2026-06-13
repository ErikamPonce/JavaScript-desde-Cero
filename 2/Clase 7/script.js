function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades y encontrar el máximo en cada mitad recursivamente 
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Llamar recursivamente a la función para ambas mitades y obtener los máximos de cada una 
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los máximos de ambas mitades y devolviendo el mayor de los dos 
    return leftMax > rightMax ? leftMax : rightMax;
}

const numbers = [3, 8, 2, 10, 5, 7];
// Llamar a la función con el arreglo de números y mostrar el resultado 
console.log(findMax(numbers)); 