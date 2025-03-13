const fs = require("fs");
const path = require("path");

/*
    To-do:
    👻 ¿Crear la carpeta automáticamente si no existe?
    👻 Guardar en /logs datos sobre la ejecución del script (éxitos, fallos, etc.).
    👻 No ejecutar el script si la carpeta no está vacía, para evitar sobreescribir los datos anteriores.
*/

// 👁️: Funcciona mientras el script se encuentre directamente en /scripts/
const directorioActual = __dirname;
const directorioRaiz = path.join(directorioActual, "..");

// Cargar Inventario
const rutaInventario = directorioRaiz + "/data/inventory.json";
const inventario = JSON.parse(fs.readFileSync(rutaInventario, "utf8"));

// Cargar Plantilla
const rutaPlantilla = directorioRaiz + "/templates/product-template.html";
const plantilla = fs.readFileSync(rutaPlantilla, "utf8");

// Generar una página para cada producto en el inventario
inventario.forEach(producto => generarPaginaProducto(producto));

// Función para generar una página de producto
function generarPaginaProducto(producto) {
    let paginaProducto = plantilla
        .replace(/{{titulo}}/g, `${producto.nombre} | TSC`)
        .replace(/{{url}}/g, `/html/e-commerce/products/${producto.sku}.html`)
        .replace(/{{nombre}}/g, producto.nombre)
        .replace(/{{foto}}/g, producto.fotos.portada)
        .replace(/{{precio}}/g, `${producto.precio.toFixed(2)} €`)
        .replace(/{{descripcion}}/g, producto.descripcion_completa)
        .replace(/{{subtitulo}}/g, producto.descripcion_corta);
    
    const rutaDestino = directorioRaiz + "/out/products/";
    const nombreFicheroProducto = `${producto.sku}.html`;
    const rutaFicheroProducto = rutaDestino + nombreFicheroProducto;

    fs.writeFileSync(rutaFicheroProducto, paginaProducto);
}