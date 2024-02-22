function renderProducto(){
    const producto = obtenerProductoLS()
    let renderProducto = `<div class="row"><div class="container col-md-6 text-center"><img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" /></div>
    <div class="container col-md-8 text-center">
    <h1 class="colorDeFuente protest-revolution-regular fst-italic fs-1 fw-bolder py-3">${producto.nombre}</h1>
    <p class="colorDeFuente flamenco-regular fs-3">${producto.descripcion}</p>
    <p class="colorDeFuente protest-revolution-regular fs-2 fw-bolder">${producto.precio}$USD</p>
    <p class="flamenco-regular colorDeFuente"><button class="btn fs-4 shadow-lg fw-bolder bg-success-subtle border-success rounded" onclick="agregarProductoCarrito()">(+) Agregar al Carrito</button></p>
    </div>`;
    document.getElementById("producto").innerHTML = renderProducto;
}

renderProducto();
renderBotonCarrito();
