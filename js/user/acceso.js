import { 
    existeUsuario, 
    sesionIniciada, 
    cargarUsuario, 
    iniciarSesion,
    crearUsuario 
} from "/js/api/auth.js";

document.addEventListener("DOMContentLoaded", () => {
    // Si por chance se accede a la página y hay una sesión iniciada, redirigir a cuenta
    if (sesionIniciada()) {
        window.location.href = "/html/user/cuenta.html";
    }

    document.getElementById("botonMagico").addEventListener("click", gestionarBotonMagico)
});

function gestionarBotonMagico() {
    let existiaUsuario = true;
    
    if (!existeUsuario()) {
        existiaUsuario = false;
        crearUsuario();
    }

    const usuario = cargarUsuario();
    iniciarSesion(usuario);

    if (existiaUsuario) renderizarSesionIniciada(); 
    else renderizarCuentaCreada();

    window.location.href = "/html/user/cuenta.html";
};

// 👁️: Pendiente de mejora
function renderizarSesionIniciada() {
    alert("¡Bienvenida de nuevo! ✨\n\nTu sesión se ha iniciado correctamente. Te estamos llevando a tu espacio personal.");
}

function renderizarCuentaCreada() {
    alert("¡Tu cuenta ha sido creada con éxito! 🎉\n\nAhora formas parte de The Sisterhood Clip. Te estamos redirigiendo a tu página de usuario.");
}