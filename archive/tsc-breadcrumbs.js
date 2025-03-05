/*
    En esta versión, las migas se tienen que pasar mediante JSON dentro del atributo "items" del componente <<app-breadcrumbs items="[]">>
*/
class AppBreadcrumbs extends HTMLElement {

    // Método llamado al añadir el elemento al DOM
    connectedCallback() {
        this.render();
    }

    render() {
        const migas = JSON.parse(this.getAttribute("items"));

        this.innerHTML = /* html */ `
            <nav>
                <ul>
                    ${migas.map((miga, index) => {
                        if (index < migas.length - 1) {
                            return `<li><a href="${miga.url}">${miga.nombre}</a></li>`
                        } else {
                            return `<li>${miga.nombre}</li>`
                        }
                    }).join("")}
                </ul>
            </nav>
        `;
    }
}

customElements.define("app-breadcrumbs", AppBreadcrumbs);



