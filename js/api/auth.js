export function crearUsuario() {
    const usuario = {
        nombre: "",
        foto: "",
        metodoPago: {
            nombreTitular: "",
            fechaCaducidad: "",
            numeroTarjeta: "",
            cvv: "",
        },
        direccionEnvio: {
            nombreCalle: "",
            ciudad: "",
            codigoPostal: "",
            pais: ""
        },
        pedidos: [],
        carrito: []
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
}

export function eliminarUsuario() {
    localStorage.removeItem("usuario");
    sessionStorage.removeItem("usuario");
}

export function existeUsuario() {
    return localStorage.getItem("usuario") !== null;
}

export function cargarUsuario() {
    return JSON.parse(localStorage.getItem("usuario"));
}

export function iniciarSesion(usuario) {
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
}

export function sesionIniciada() {
    return sessionStorage.getItem("usuario") !== null;
}

export function cerrarSesion() {
    sessionStorage.removeItem("usuario");
}