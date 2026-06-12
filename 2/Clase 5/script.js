function findLongestWord(texto) {
    // Dividir el texto en palabras usando el espacio como separador y almacenar en un arreglo 
    const palabras = texto.split(' ');
    //almacenar la palabra más larga encontrada
    let longestWord = '';

    // Recorrer el arreglo de palabras y comparar la longitud de cada palabra con la más larga encontrada hasta el momento y actualizar la palabra más larga si se encuentra una palabra más larga
    for (let i = 0; i < palabras.length; i++) {
        // Comparar la longitud de la palabra actual con la más larga
        if (palabras[i].length > longestWord.length) {
            longestWord = palabras[i];
        }
    }

    // Retornar la palabra más larga encontrada
    return longestWord;
}

const texto = "JavaScript es un lenguaje de programación increíble para aprender y crear proyectos asombrosos en la web y más allá de eso es muy divertido de usar y tiene una gran comunidad de desarrolladores que siempre están dispuestos a ayudar y compartir conocimientos con otros entusiastas de la programación así que no dudes en sumergirte en el mundo de JavaScript y descubrir todo lo que puedes lograr con él desde aplicaciones web hasta desarrollo de juegos y mucho más ";

console.log(findLongestWord(texto));
