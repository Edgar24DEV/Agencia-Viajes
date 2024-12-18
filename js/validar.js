function validarForm(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    console.log("validarF");

    // Guardar datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("telefono", telefono);

    validarCampos(nombre, email, telefono);
}

function validarCampos(nombre, email, telefono) {
    console.log("validarCampos");

    let val1 = validarNombre(nombre);
    let val2 = validarEmail(email);
    let val3 = validarTelefono(telefono);

    let texto = document.getElementById("enviado");

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
    return patron.test(nombre); // Más conciso
}

// Función para validar el campo de email
function validarEmail(email) {
    let patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email); // Más conciso
}

// Función para validar el campo de teléfono
function validarTelefono(telefono) {
    let patron = /^\d{9}$/;
    return patron.test(telefono); // Más conciso
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
// Si se reinicia la página sin enviar el formulario se quedaran los datos guardados en el formulario.
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
