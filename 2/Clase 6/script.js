// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función recursiva para buscar un regalo en la lista y devolver su posición o un mensaje si no se encuentra
function findGift(gifts, giftName, index = 0) {

    // Caso base: llegamos al final de la lista sin encontrar el regalo y retornamos un mensaje indicando que no se encontró
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base: encontramos el regalo y retornamos un mensaje indicando su posición en la lista 
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Llamada recursiva para seguir buscando en el resto de la lista incrementando el índice para avanzar al siguiente elemento y continuar la búsqueda hasta encontrar el regalo o llegar al final de la lista 
    return findGift(gifts, giftName, index + 1);
}

let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));

// Caso cuando el regalo no está en la lista 
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));