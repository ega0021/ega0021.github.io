import { sesionIniciada } from "/js/api/auth.js";

document.addEventListener("DOMContentLoaded", () => {
    
    const botonUsuario = document.getElementById("botonUsuario");
    botonUsuario.addEventListener("click", (e) => {
        e.preventDefault();
        if(sesionIniciada()) {
            window.location.href = "/html/user/cuenta.html";
        } else {
            window.location.href = "/html/user/acceso.html"
        }
    })
});