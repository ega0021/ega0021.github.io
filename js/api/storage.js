"use strict";
import { cargarUsuario } from "/js/api/auth.js";

// Guardar cambios en storage
function guardarUsuario(usuario) {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
}

function actualizarDatoSimpleUsuario(propiedad, valor) {
    const usuario = cargarUsuario();

    if(usuario) {
        usuario[propiedad] = valor;
        guardarUsuario(usuario);
    } else {
        console.error("Usuario no encontrado");
    }
}

function actualizarDatoCompuestoUsuario(propiedad, subPropiedad, valor) {
    const usuario = cargarUsuario();

    if (usuario && usuario[propiedad] && typeof usuario[propiedad] === "object") {
        usuario[propiedad][subPropiedad] = valor;
        guardarUsuario(usuario);
    } else {
        console.error(`No se encontró la propiedad "${propiedad}" o no es un objeto`);
    }
}

/* Funciones para datos sencillos (nombre y foto) */
export function actualizarNombre(nombre) {
    actualizarDatoSimpleUsuario("nombre", nombre);
}

export function borrarNombre() {
    actualizarDatoSimpleUsuario("nombre", "");
}

export function actualizarFoto(foto) {
    actualizarDatoSimpleUsuario("foto", foto);
}

export function borrarFoto() {
    actualizarDatoSimpleUsuario("foto", "");
}

/* Método de Pago */
export function actualizarNombreTitular(nombreTitular) {
    actualizarDatoCompuestoUsuario("metodoPago", "nombreTitular", nombreTitular);
}

export function actualizarFechaCaducidad(fechaCaducidad) {
    actualizarDatoCompuestoUsuario("metodoPago", "fechaCaducidad", fechaCaducidad);
}

export function actualizarNumeroTarjeta(numeroTarjeta) {
    actualizarDatoCompuestoUsuario("metodoPago", "numeroTarjeta", numeroTarjeta);
}

export function actualizarCVV(cvv) {
    actualizarDatoCompuestoUsuario("metodoPago", "cvv", cvv)
}

export function borrarMetodoPago() {
    actualizarNombreTitular("");
    actualizarFechaCaducidad("");
    actualizarNumeroTarjeta("");
    actualizarCVV("");
}

/* Dirección de Envío */
export function actualizarNombreCalle(nombreCalle) {
    actualizarDatoCompuestoUsuario("direccionEnvio", "nombreCalle", nombreCalle);
}

export function actualizarCiudad(ciudad) {
    actualizarDatoCompuestoUsuario("direccionEnvio", "ciudad", ciudad);
}

export function actualizarCodigoPostal(codigoPostal) {
    actualizarDatoCompuestoUsuario("direccionEnvio", "codigoPostal", codigoPostal);
}

export function actualizarPais(pais) {
    actualizarDatoCompuestoUsuario("direccionEnvio", "pais", pais);
}

export function borrarDireccionEnvio() {
    actualizarNombreCalle("");
    actualizarCiudad("");
    actualizarCodigoPostal("");
    actualizarPais("");
}
