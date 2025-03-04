class AppHeader extends HTMLElement {

    // Método llamado al añadir el elemento al DOM
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /* html */ `
            <!-- Logo -->
            <a href="/index.html">
                <img src="/assets/images/common//header/logo.svg" alt="Logo de The Sisterhood Clip" width="64">
            </a>

            <!-- Menú de navegación -->
            <nav>
                <ul>
                    <li><a href="/html/e-commerce/categories/clasica.html">Gama Clásica</a></li>
                    <li><a href="/html/e-commerce/categories/colorpulse.html">Gama Color Pulse</a></li>
                    <li><a href="/html/e-commerce/categories/exclusive.html">Gama Exclusive</a></li>
                    <li><a href="#">Enlace 4</a></li>
                </ul>
            </nav>

            <!-- Utilidades -->
            <div>
                <!-- Barra de búsqueda -->
                <form action="#">
                    <input type="search" />
                    <button type="submit" aria-label="Buscar"><img src="/assets/icons/lupa.svg" alt="Ícono de búsqueda" width="24" height="24" /></button>
                </form>

                <!-- Botón de usuario -->
                <a id="botonUsuario" href="#"><img src="/assets/icons/usuario.svg" alt="Ícono de usuario" width="24" height="24" /></a>

                <!-- Botón de carrito -->
                <a href="#"><img src="/assets//icons//carrito.svg" alt="Ícono de carrito" width="24" height="24" /></a>
            </div>
        `;
    }
}

customElements.define("app-header", AppHeader);