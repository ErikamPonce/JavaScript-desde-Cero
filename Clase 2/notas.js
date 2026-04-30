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