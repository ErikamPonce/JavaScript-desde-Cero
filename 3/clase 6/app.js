// Importar Zod
const { z } = window.Zod;


// Crear esquema de validación
const registerSchema = z.object({

    nombre: z
        .string()
        .min(3, "El nombre debe tener mínimo 3 caracteres."),


    correo: z
        .string()
        .email("El correo electrónico no es válido."),


    contraseña: z
        .string()
        .min(6, "La contraseña debe tener mínimo 6 caracteres.")

});



// Capturar envío del formulario

document
.getElementById("registerForm")
.addEventListener("submit", function(event){


    // Evita recargar la página
    event.preventDefault();



    // Obtener datos del formulario

    const formData = {

        nombre:
        document.getElementById("name").value,


        correo:
        document.getElementById("email").value,


        contraseña:
        document.getElementById("password").value

    };



    const errorContainer =
    document.getElementById("errors");


    // Limpiar mensajes anteriores

    errorContainer.textContent = "";



    try {


        // Validar datos con Zod

        registerSchema.parse(formData);



        alert("¡Registro exitoso!");



    } catch(error){



        // Mostrar errores

        errorContainer.textContent =
        error.errors
        .map(error => error.message)
        .join(" | ");



    }


});