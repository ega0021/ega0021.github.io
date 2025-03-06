class TSCBreadcrumbs extends HTMLElement {
    constructor() {
        super();
    }
    
    // Método llamado al añadir el elemento al DOM
    connectedCallback() {
        this.render();
    }

    render() {
        // Vector de migas formado por los <tsc-breadcrumb>
        const ul = document.createElement("ul");
        const migas = Array.from(this.children);

        migas.forEach(miga => ul.appendChild(miga));

        // Limpiar el contenido y añadir la estructura final
        this.innerHTML = "";
        this.appendChild(ul);
    }
}

class TSCBreadcrumb extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const url = this.getAttribute("url");
        const nombreRuta = this.textContent.trim();
        if (url) {
            this.outerHTML = `<li><a href="${url}">${nombreRuta}</a></li>`;
        } else {
            this.outerHTML = `<li><span class="activo">${nombreRuta}</span></li>`
        }
    }
}

customElements.define("tsc-breadcrumbs", TSCBreadcrumbs);
customElements.define("tsc-breadcrumb", TSCBreadcrumb);
