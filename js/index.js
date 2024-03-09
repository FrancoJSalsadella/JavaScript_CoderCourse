
function renderProductos(){
    fetch("./js/productos.json")
    .then(response => response.json())
    .then(productos => {
        let tarjetaProducto = ""
        for (const producto of productos) {
            tarjetaProducto += `<div class="card col-md-4 text-center shadow-lg" style="width: 16rem;">
                <a id="123" href="producto.html" class="text-decoration-none" onclick="verProductoIndividual(${producto.id})">
                    <img src="${producto.imagen}" class="card-img-top img-fluid rounded" alt="${producto.nombre}">
                    <div class="card-body text-center">
                        <p class="colorDeFuente protest-revolution-regular card-text fw-bolder fst-italic fs-3">${producto.nombre}</p>
                    </div>
                </a>
            </div>`;
        }
        document.getElementById("productos").innerHTML = tarjetaProducto;
    })
}




renderProductos();
renderBotonCarrito();
