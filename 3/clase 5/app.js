document.getElementById("registroEvento").addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();

    const correo = document.getElementById("correo").value.trim();

    const telefono = document.getElementById("telefono").value.trim();

    const intereses = document.querySelectorAll("input[name='intereses']:checked");

    const horario = document.querySelector("input[name='horario']:checked");

    const fecha = document.getElementById("fecha").value;

    const hora = document.getElementById("hora").value;

    // Validación 1
    if(nombre.length < 3){

        alert("El nombre debe tener al menos 3 caracteres.");

        return;

    }

    // Validación 2
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regexCorreo.test(correo)){

        alert("Ingrese un correo electrónico válido.");

        return;

    }

    // Validación 3
    const regexTelefono = /^[0-9]{10}$/;

    if(!regexTelefono.test(telefono)){

        alert("El teléfono debe contener exactamente 10 dígitos.");

        return;

    }

    // Validación 4
    if(intereses.length === 0){

        alert("Seleccione al menos un interés.");

        return;

    }

    if(!horario){

        alert("Seleccione un horario.");

        return;

    }

    const hoy = new Date().toISOString().split("T")[0];

    if(fecha < hoy){

        alert("La fecha no puede ser anterior al día de hoy.");

        return;

    }

    if(hora === ""){

        alert("Seleccione una hora.");

        return;

    }

    alert("Registro exitoso. ¡Gracias por registrarte!");

});