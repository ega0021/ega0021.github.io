function crearUsuario() {
    const usuario = {
        nombre: "",
        foto: "",
        metodoPago: "",
        direccionEnvio: "",
        pedidos: [],
        carrito: []
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
}

function eliminarUsuario() {
    localStorage.removeItem("usuario");
    sessionStorage.removeItem("usuario");
}

function existeUsuario() {
    return localStorage.getItem("usuario") !== null;
}

function iniciarSesion(usuario) {
    sessionStorage.setItem("usuario", usuario);
}

function sesionIniciada() {
    return sessionStorage.getItem("usuario") !== null;
}

/*----------------------------------------------------------*/

// Función de redirección del botón de usuario. 
/*const botonUsuario = document.getElementById("botonUsuario");

botonUsuario.addEventListener("click", (e) => {
    e.preventDefault();
    if(sesionIniciada()) {
        window.location.href = "/html/user/cuenta.html";
    } else {
        window.location.href = "/html/user/acceso.html"
    }
});*/

/*----------------------------------------------------------*/




// Función del botón mágico.
const botonMagico = document.getElementById("botonMagico");

botonMagico.addEventListener("click", () => {
    alert("Hello World");
});
