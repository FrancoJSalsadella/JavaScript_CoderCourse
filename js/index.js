
function renderProductos(){
    const productos = obtenerProductosLS()
    let contenido = ""
    for (const producto of productos) {
        contenido += `<div class="card col-md-4 text-center shadow-lg" style="width: 16rem;">
        <a href="producto.html" onclick="guardarIdProductoIndividualLS(${producto.id})" class="text-decoration-none">
        <img src="${producto.imagen}" class="card-img-top img-fluid" alt="${producto.nombre}">
        <div class="card-body text-center">
            <p class="colorDeFuente protest-revolution-regular card-text fw-bolder fst-italic fs-3">${producto.nombre}</p>
        </div>
        </a>
        </div>`;
    }
    document.getElementById("productos").innerHTML = contenido;
}

renderProductos();
renderBotonCarrito();