"use strict";

// Hacer el menú de navegación translucido al estar arriba del todo
// 👁️: La transparencia al volver a subir creo que no coincide con la transparencia original de homepage.css.
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { 
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    }
});