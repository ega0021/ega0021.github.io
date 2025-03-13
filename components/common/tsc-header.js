class TSCHeader extends HTMLElement {
    constructor() {
        super();
    }
    // Método llamado al añadir el elemento al DOM
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /* html */ `
            <div id="navbar" class="navbar">
                <!-- Sección izquierda-->
                <div class="nav-left">
                    <!-- Menú hamburguesa  -->
                    <button id="botonHamburguesa" class="boton-hamburguesa" aria-label="Abrir menú de navegación" aria-controls="menu" aria-expanded="false">
                        <span class="hamburger-icon"><img src="/assets/icons/header/hamburguesa.svg" alt="Icono del menú de navegación"></span>
                    </button>

                    <!-- Búsqueda -->
                    <button id="botonBusqueda" class="boton-busqueda" aria-label="Abrir búsqueda">
                        <span class="search-icon"><img src="/assets/icons/header/lupa.svg" alt="Icono de búsqueda"></span>
                    </button>
                </div>
    
                <!-- Sección central: Logo -->
                <div class="nav-center">
                    <a href="/index.html">
                        <img id="logo" src="/assets/icons/header/logo.svg" alt="Logo de The Sisterhood Clip">
                    </a>
                </div>
    
                <!-- Sección derecha: Iconos de cuenta y carrito -->
                <div class="nav-right">
                    <!-- Enlace a la página de perfil o de acceso -->
                    <a id="botonUsuario" href="#" class="account">
                        <span class="account-icon"><img src="/assets/icons/header/usuario.svg" alt="Icono de cuenta"></span>
                    </a>
            
                    <!-- Enlace al carrito -->
                    <a id="botonCarrito" href="#" class="cart">
                        <span class="cart-icon"><img src="/assets/icons/header/carrito.svg" alt="Icono del carrito"></span>
                    </a>
                </div>
    
                <!-- Menú lateral -->
                <div id="sidenav" class="sidenav" aria-label="Menú lateral">
                    <button id="botonCerrar" class="closebtn" aria-label="Cerrar menú de navegación">
                        <span class="close-icon"><img src="/assets/icons/header/cerrar.svg" alt="Icono de cerrar"></span>
                    </button>
                    <nav>
                        <ul>
                            <li><a href="/html/e-commerce/categories/clasica.html">Clásica</a></li>
                            <li><a href="/html/e-commerce/categories/colorpulse.html">Color Pulse</a></li>
                            <li><a href="/html/e-commerce/categories/exclusive.html">Exclusiva</a></li><br>
                            <li><a href="/html/user/acceso.html">Cuenta</a></li>
                            <li><a href="/html/about/nosotros.html">Nosotros</a></li>
                            <li><a href="mailto:hola@thesisterhoodclip.com">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        `;
    }
}

customElements.define("tsc-header", TSCHeader);