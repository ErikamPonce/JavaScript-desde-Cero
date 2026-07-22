const planetas = require("./planetas");
const cowsay = require("cowsay");

console.log(

    cowsay.say({
        text: "¡Bienvenido Explorador Espacial!"
    })

);

console.log("\n===== PLANETAS DESCUBIERTOS =====\n");

planetas.forEach((planeta, index) => {

    console.log(`Planeta #${index + 1}`);
    console.log(`Nombre: ${planeta.nombre}`);
    console.log(`Descripción: ${planeta.descripcion}`);
    console.log(`Descubierto en: ${planeta.descubiertoEn}`);
    console.log("------------------------------");

});

console.log(`\nTotal de planetas registrados: ${planetas.length}`);