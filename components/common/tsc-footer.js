class TSCFooter extends HTMLElement {

    // Método llamado al añadir el elemento al DOM
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /* html */ `
            <p>Copyright © 2025 The Sisterhood Clip S.L. Todos los derechos reservados.</p>
        `;
    }
}

customElements.define("tsc-footer", TSCFooter);