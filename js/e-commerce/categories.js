let inventario = [];

async function cargarInventario() {
    try {
        const respuesta = await fetch("/data/inventory.json");
        inventario = await respuesta.json();
        console.log(inventario);
        mostrarProductos(inventario);
    } catch(e) {
        console.log(e);
    }
}

function mostrarProductos(productos) {
    const contenedor = document.getElementById("productos");
    
    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.innerHTML = /* html */`
            <a href="#">
                <img src="${producto.fotos.portada}" width="200">
                <h2>${producto.nombre}</h2>
                <p>${producto.precio}</p>
            </a>
        `;
        contenedor.appendChild(divProducto);
    });
}

cargarInventario();