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
    alert(`
        ¡Sesión Iniciada!
        Serás redirigido a tu página de usuario.
    `);
}

function renderizarCuentaCreada() {
    alert(`
        ¡Cuenta Creada!
        Serás redirigido a tu página de usuario.
    `);
}