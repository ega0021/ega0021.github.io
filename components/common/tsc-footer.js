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
            <article class="footer-section">
                <h4>Empresa</h4>
                <nav>
                    <ul>
                        <li><a href="/html/about/nosotros.html">Sobre nosotros</a></li>
                        <li><a href="/html/about/nosotros.html">Preguntas frecuentes</a></li>
                        <li>
                            <a href="mailto:hola@thesisterhoodclip.com">hola@thesisterhoodclip.com</a><br>
                            <small>¡Yep, de verdad funciona!</small>
                        </li>
                    </ul>
                </nav>
            </article>
            <article class="footer-section">
                <h4>Nuestros Productos</h4>
                <nav>
                    <ul>
                        <li><a href="/html/e-commerce/categories/clasica.html">Gama Clásica</a></li>
                        <li><a href="/html/e-commerce/categories/colorpulse.html">Gama Color Pulse</a></li>
                        <li><a href="/html/e-commerce/categories/exclusive.html">Gama Exclusive</a></li>
                    </ul>
                </nav>
            </article>
            <article class="footer-section">
                <h4>Síguenos en...</h4>
                <ul>
                    <li><a href="https://www.instagram.com/thesisterhoodclip"><img src="/assets/icons/footer/instagram-white.svg" alt="Icono de Instagram"></a></li>
                    <li><a href="https://x.com/sisterhoodclip"><img src="/assets/icons/footer/tiktok-white.svg" alt="Icono de TikTok"></a></li>
                    <li><a href="https://x.com/sisterhoodclip"><img src="/assets/icons/footer/x-white.svg" alt="Icono de X"></a></li>
                </ul>
            </article>
        </section>
        <section class="footer-bottom">
            <img src="/assets/images/common/footer/logo.svg" alt="Logo de The Sisterhood Clip">
            <nav>
                <ul>
                    <li><a href="#">Política de Privacidad</a></li>
                    <li><a href="#">Condiciones de Uso</a></li>
                    <li><a href="#">Política de Cookies</a></li>
                </ul>
            </nav>
            <p>Copyright &copy; 2025 The Sisterhood Clip S.L. Todos los derechos reservados</p>
        </section>
        `;
    }
}

customElements.define("tsc-footer", TSCFooter);