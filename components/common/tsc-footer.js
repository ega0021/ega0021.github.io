class TSCFooter extends HTMLElement {
    constructor() {
        super();
    }
    // Método llamado al añadir el elemento al DOM
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /* html */ `
        <section class="footer-content">
            <article class="footer-section izquierda">
                <div>
                    <img src="/assets/icons/footer/ubicacion.svg" alt="Icono de dirección" />
                    <p>
                        Paseo de Morella, 66 <br>
                        12004 Castellón de la plana
                    </p>
                </div>
                <div>
                    <img src="/assets/icons/footer/telefono.svg" alt="Icono de teléfono" />
                    <p>+34 613 018 099</p>
                </div>
                <div>
                    <img src="/assets/icons/footer/correo.svg" alt="Icono de correo" />
                    <p>hola@thesisterhoodclip.com</p>
                </div>
            </article>

            <article class="footer-section centro">
                <h4>Nuestro Catálogo</h4>
                <nav aria-label="Catálogo">
                    <ul>
                        <li><a href="/html/e-commerce/categories/clasica.html">Clásica</a></li>
                        <li><a href="/html/e-commerce/categories/colorpulse.html">Color Pulse</a></li>
                        <li><a href="/html/e-commerce/categories/exclusive.html">Exclusive</a></li>
                    </ul>
                </nav>
            </article>

            <article class="footer-section derecha">
                <h4>Síguenos en...</h4>
                <ul class="redes-sociales">
                    <li><a href="https://instagram.com/thesisterhoodclip"><img src="/assets/icons/footer/instagram.svg" alt="Icono de Instagram"></a></li>
                    <li><a href="https://instagram.com/thesisterhoodclip"><img src="/assets/icons/footer/facebook.svg" alt="Icono de Facebook"></a></li>
                    <li><a href="https://x.com/sisterhoodclip"><img src="/assets/icons/footer/x.svg" alt="Icono de X"></a></li>
                </ul>
            </article>
        </section>

        <section class="footer-bottom">
            <img src="/assets/icons/footer/logo.svg" alt="Logo de The Sisterhood Clip">
            <nav>
                <ul>
                    <li><a href="#">Política de Privacidad</a></li>
                    <li><a href="#">Condiciones de Uso</a></li>
                    <li><a href="#">Política de Cookies</a></li>
                </ul>
            </nav>
            <p>&copy; 2025 - The Sisterhood Clip S.L.</p>
        </section>
        `;
    }
}

customElements.define("tsc-footer", TSCFooter);