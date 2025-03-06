"use strict";
import { sesionIniciada } from "/js/api/auth.js";

document.addEventListener("DOMContentLoaded", () => {
    // Controlar el menú lateral
    document.getElementById("botonHamburguesa").addEventListener("click", abrirMenu);
    document.getElementById("botonCerrar").addEventListener("click", cerrarMenu);

    // Gestionar búsqueda y carrito
    document.getElementById("botonBusqueda").addEventListener("click", () => alert("Bajo Construcción 🏗️"));
    document.getElementById("botonCarrito").addEventListener("click", () => alert("Bajo Construcción 🏗️"));

    // Redireccionar al hacer clic en el icono de usuario
    document.getElementById("botonUsuario").addEventListener("click", (e) => redireccionarUsuario(e));
});


function abrirMenu() {
    document.getElementById("sidenav").style.width = "100%";
}

function cerrarMenu() {
    document.getElementById("sidenav").style.width = "0%";
}

function redireccionarUsuario(e) {
    e.preventDefault();
    if(sesionIniciada()) {
        window.location.href = "/html/user/cuenta.html";
    } else {
        window.location.href = "/html/user/acceso.html"
    }
}