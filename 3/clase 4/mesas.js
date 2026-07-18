// Base de datos simulada
const mesasDisponibles = 5;

// Verificar disponibilidad
function verificarDisponibilidad(mesasSolicitadas) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (mesasSolicitadas <= mesasDisponibles) {

                resolve(
                    `Hay ${mesasSolicitadas} mesa(s) disponibles para la reserva.`
                );

            } else {

                reject(
                    `No hay suficientes mesas. Solo hay ${mesasDisponibles} disponibles.`
                );

            }

        }, 2000);

    });

}

// ==============================
// Enviar correo de confirmación
// ==============================
function enviarConfirmacionReserva(nombreCliente) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const exito = Math.random();

            if (exito >= 0.3) {

                resolve(
                    `Correo de confirmación enviado correctamente a ${nombreCliente}.`
                );

            } else {

                reject(
                    "Error al enviar el correo de confirmación."
                );

            }

        }, 1500);

    });

}

// ==============================
// Hacer reserva
// ==============================
async function hacerReserva(nombreCliente, mesasSolicitadas) {

    try {

        console.log("\n================================");
        console.log(`Cliente: ${nombreCliente}`);
        console.log("Verificando disponibilidad...");

        const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);

        console.log(disponibilidad);

        console.log("Realizando reserva...");

        const correo = await enviarConfirmacionReserva(nombreCliente);

        console.log(correo);

        console.log("Reserva completada correctamente.");

    } catch (error) {

        console.log("Error:", error);

    }

}

// ==============================
// Pruebas
// ==============================

// Reserva válida
hacerReserva("Juan Pérez", 3);

// Reserva inválida (no hay suficientes mesas)
setTimeout(() => {

    hacerReserva("María López", 7);

}, 5000);

// Otra reserva válida
setTimeout(() => {

    hacerReserva("Carlos Hernández", 2);

}, 10000);