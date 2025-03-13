/*
    To-do: 
        - Refactorizar del copón.
        - Añadir máximo de productos por página :)
*/

let inventario = [];
let inventarioFiltrado = [];

async function cargarInventario() {
    try {
        const respuesta = await fetch("/data/inventory.json");
        inventario = await respuesta.json();

        // 👁️: Creo que podría sacar esto de aquí ya que no es parte de cargar el inventario
        inventarioFiltrado = inventario.filter(producto => producto.categoria === obtenerCategoriaDesdeURL());
        console.log(inventarioFiltrado);
        mostrarProductos(inventarioFiltrado, "recomendacion");
    } catch(e) {
        console.log(e);
    }
}

function mostrarProductos(productos, criterio) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    // Ordenar según el criterio seleccionado
    // 👁️: Definitivamente debería de ir en otra función. 
    //      ordenarPorPrecioDescendiente(), ordenarPorPrecioAscendiente(), ordenarPorRecomendacion()
    productos.sort((a, b) => {
        if (criterio === "precio") return a.precio - b.precio;
        else if (criterio === "recomendacion") return b.peso - a.peso; // Mayor peso = más recomendado
    });
    
    // renderizar productos en la página
    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("producto");
        
        divProducto.innerHTML = /* html */`
            <a href="/html/e-commerce/products/${producto.sku}.html">
                <img src="${producto.fotos.portada}" width="200">
                <p class="precio">${producto.precio.toFixed(2)} €</p>
                <h2 class="nombre">${producto.nombre}</h2>
                <p class="descripcion">${producto.descripcion_corta}</p>
                </a>
            <button class="btn-carrito" type="button" onclick="alert('¡Artículo añadido al carrito! 🛒')">AÑADIR AL CARRITO</button>
        `;
        contenedor.appendChild(divProducto);
    });
}

function obtenerCategoriaDesdeURL() {
    const url = window.location.pathname;
    if (url.includes("clasica")) return "clasica";
    else if (url.includes("colorpulse")) return "colorpulse";
    else if (url.includes("exclusive")) return "exclusive";
}

cargarInventario();