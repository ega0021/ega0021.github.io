import { 
    existeUsuario, 
    sesionIniciada, 
    cargarUsuario, 
    iniciarSesion,
    crearUsuario 
} from "/js/api/auth.js";

// Si por chance hay una sesión iniciada, redirigir a cuenta
document.addEventListener("DOMContentLoaded", () => {
    if (sesionIniciada()) {
        window.location.href = "/html/user/cuenta.html";
    }
});

const botonMagico = document.getElementById("botonMagico");
botonMagico.addEventListener("click", () => {

    let existiaUsuario = true;
    
    if (!existeUsuario()) {
        existiaUsuario = false;
        crearUsuario();
    }

    const usuario = cargarUsuario();
    iniciarSesion(usuario);

    // Se podría utilizar una variable de control "existiaUsuario" y en base a su valor cargar aquí un componente u otro.
    if (existiaUsuario) {
        alert(`
            ¡Sesión Iniciada!
            Serás redirigido a la página de perfil.
        `);
    } else {
        alert(`
            ¡Cuenta Creada!
            Serás redirigido a la página de perfil.
        `);
    }

    window.location.href = "/html/user/cuenta.html";
});