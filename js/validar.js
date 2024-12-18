function validarForm(e) {
    e.preventDefault();
    let nombreInput = document.getElementById("nombre");
    let emailInput = document.getElementById("email");
    let telefonoInput = document.getElementById("telefono");

    let nombre = nombreInput.value;
    let email = emailInput.value;
    let telefono = telefonoInput.value;

    console.log("validarF");

    // Guardar datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("telefono", telefono);

    validarCampos(nombre, email, telefono, nombreInput, emailInput, telefonoInput);
}

function validarCampos(nombre, email, telefono, nombreInput, emailInput, telefonoInput) {
    console.log("validarCampos");

    let val1 = validarNombre(nombre);
    let val2 = validarEmail(email);
    let val3 = validarTelefono(telefono);

    let texto = document.getElementById("enviado");

    // Aplicar estilos según validación
    toggleInputStyle(nombreInput, val1);
    toggleInputStyle(emailInput, val2);
    toggleInputStyle(telefonoInput, val3);

    if (val1 && val2 && val3) {
        texto.innerText = "Se ha enviado correctamente";
        texto.style.color = "green";
        reset();
    } else {
        texto.innerText = "No se han completado los campos correctamente";
        texto.style.color = "red";
    }
}

// Función para validar el campo de nombre
function validarNombre(nombre) {
    let patron = /^[a-zA-Z\s]+$/;
    return patron.test(nombre);
}

// Función para validar el campo de email
function validarEmail(email) {
    let patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email);
}

// Función para validar el campo de teléfono
function validarTelefono(telefono) {
    let patron = /^\d{9}$/;
    return patron.test(telefono);
}

// Función para añadir o quitar clases
function toggleInputStyle(input, isValid) {
    if (isValid) {
        input.classList.remove("input-invalido");
    } else {
        input.classList.add("input-invalido");
    }
}

// Función para reiniciar el formulario y limpiar el almacenamiento
function reset() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("mensaje").value = "";

    // Limpiar localStorage
    localStorage.removeItem("nombre");
    localStorage.removeItem("email");
    localStorage.removeItem("telefono");
}

// Prellenar campos desde localStorage
function prellenarCampos() {
    if (localStorage.getItem("nombre")) {
        document.getElementById("nombre").value = localStorage.getItem("nombre");
    }
    if (localStorage.getItem("email")) {
        document.getElementById("email").value = localStorage.getItem("email");
    }
    if (localStorage.getItem("telefono")) {
        document.getElementById("telefono").value = localStorage.getItem("telefono");
    }
}

window.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("enviar");
    boton.addEventListener("click", validarForm);

    // Prellenar campos si hay datos almacenados
    prellenarCampos();
});
