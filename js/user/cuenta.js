"use strict";
import { sesionIniciada, cargarUsuario, cerrarSesion, eliminarUsuario } from "/js/api/auth.js";
import { 
    actualizarNombre, actualizarCiudad, actualizarCodigoPostal, actualizarNombreCalle,
    actualizarPais, actualizarCVV, actualizarFechaCaducidad, actualizarNombreTitular, 
    actualizarNumeroTarjeta 
} from "/js/api/storage.js";

document.addEventListener("DOMContentLoaded", () => {
    // Redirigir a página de acceso si se accede sin haber iniciado sesión
    if (!sesionIniciada) location.href = "/html/user/acceso.html";

    // Cargar los datos de usuario
    cargarDatosUsuario();

    /* Gestionar eventos */

    // Cerrar sesión
    document.getElementById("cerrarSesion").addEventListener("click", () => {
        if (confirm("¿Estás seguro que deseas cerrar la sesión?\nSerás redirigido a la página de inicio")) {
            cerrarSesion();
            location.href = "/index.html";
        }
    });

    // Borrar usuario
    document.getElementById("eliminarUsuario").addEventListener("click", () => {
        if (confirm("¿Estás seguro que deseas borrar la cuenta?\nEsta no se podrá recuperar")) {
            alert("¡Cuenta borrada con éxito!\nSerás redirigido a la página de inicio");
            eliminarUsuario();
            location.href = "/index.html";
        }
    });

    // Editar campos
    document.getElementById("editarInfoPersonal").addEventListener("click", editarInfoPersonal);
    document.getElementById("editarDireccionEnvio").addEventListener("click", editarDireccionEnvio);
    document.getElementById("editarMetodoPago").addEventListener("click", editarMetodoPago);
});

function cargarDatosUsuario() {
    const usuario = cargarUsuario();
    if (usuario) {
        // Nombre y Foto
        document.getElementById("nombre").value = usuario.nombre || "";
        document.getElementById("foto").src = usuario.foto || "/assets/images/user/default-profile.png";

        // Dirección de Envío
        if (usuario.direccionEnvio) {
            document.getElementById("nombreCalle").value = usuario.direccionEnvio.nombreCalle || "";
            document.getElementById("ciudad").value = usuario.direccionEnvio.ciudad || "";
            document.getElementById("codigoPostal").value = usuario.direccionEnvio.codigoPostal || "";
            document.getElementById("pais").value = usuario.direccionEnvio.pais || "";
        }

        // Método de Pago
        if (usuario.metodoPago) {
            document.getElementById("nombreTitular").value = usuario.metodoPago.nombreTitular || "";
            document.getElementById("fechaCaducidad").value = usuario.metodoPago.fechaCaducidad || "";
            document.getElementById("numeroTarjeta").value = usuario.metodoPago.numeroTarjeta || "";
            document.getElementById("cvv").value = usuario.metodoPago.cvv || "";
        }
    }
}

function editarInfoPersonal() {
    const boton = document.getElementById("editarInfoPersonal");
    const entradaNombre = document.getElementById("nombre");

    if(boton.textContent === "Editar") {
        entradaNombre.removeAttribute("readonly");
        boton.textContent = "Guardar";
    } else {
        const nuevoNombre = entradaNombre.value;
        actualizarNombre(nuevoNombre);
    
        entradaNombre.setAttribute("readonly", true);
        boton.textContent = "Editar";
        alert("¡Cambios guradados con éxito!");
    }
}

function editarDireccionEnvio() {
    const boton = document.getElementById("editarDireccionEnvio");
    const entradas = [
        document.getElementById("nombreCalle"),
        document.getElementById("ciudad"),
        document.getElementById("codigoPostal"),
        document.getElementById("pais")
    ];

    if (boton.textContent === "Editar") {
        // Quitar readonly de todas las entradas
        entradas.forEach(entrada => entrada.removeAttribute("readonly"));
        boton.textContent = "Guardar";
    } else {
        const nuevoNombreCalle = document.getElementById("nombreCalle").value;
        const nuevaCiudad = document.getElementById("ciudad").value;
        const nuevoCodigoPostal = document.getElementById("codigoPostal").value;
        const nuevoPais = document.getElementById("pais").value;

        actualizarNombreCalle(nuevoNombreCalle);
        actualizarCiudad(nuevaCiudad);
        actualizarCodigoPostal(nuevoCodigoPostal);
        actualizarPais(nuevoPais);

        // Restaruar el estado de solo lectura
        entradas.forEach(entrada => entrada.setAttribute("readonly", true));
        boton.textContent = "Editar";
        alert("¡Cambios guradados con éxito!");
    }
}

function editarMetodoPago() {
    const boton = document.getElementById("editarMetodoPago");
    const entradas = [
        document.getElementById("nombreTitular"),
        document.getElementById("fechaCaducidad"),
        document.getElementById("numeroTarjeta"),
        document.getElementById("cvv")
    ];

    if (boton.textContent === "Editar") {
        entradas.forEach(entrada => entrada.removeAttribute("readonly"));
        boton.textContent = "Guardar";
    } else {
        const nuevoNombreTitular = document.getElementById("nombreTitular").value;
        const nuevaFechaCaducidad = document.getElementById("fechaCaducidad").value;
        const nuevoNumeroTarjeta = document.getElementById("numeroTarjeta").value;
        const nuevoCVV = document.getElementById("cvv").value;

        actualizarNombreTitular(nuevoNombreTitular);
        actualizarFechaCaducidad(nuevaFechaCaducidad);
        actualizarNumeroTarjeta(nuevoNumeroTarjeta);
        actualizarCVV(nuevoCVV);

        entradas.forEach(entrada => entrada.setAttribute("readonly", true));
        boton.textContent = "Editar";
        alert("¡Cambios guardados con éxito!");
    }
}