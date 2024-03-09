function renderProducto(){
    const producto = obtenerProductoLS()
    let renderProducto = `<div class="col"><div class="container col-md-5 text-center"><img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" /></div>
    <div id="contenedorProductoIndividual" class="container col-md-8 text-center">
        <h1 class="colorDeFuente protest-revolution-regular fst-italic fs-1 fw-bolder py-3">${producto.nombre}</h1>
        <p class="colorDeFuente flamenco-regular fs-3">${producto.descripcion}</p>
        <p class="colorDeFuente protest-revolution-regular fs-2 fw-bolder">${producto.precio}$USD</p>
    </div>`;
    document.getElementById("producto").innerHTML = renderProducto;
    
    let botonDeAgregarAlCarrito = document.createElement("p");
    botonDeAgregarAlCarrito.addEventListener("click", agregarProductoAlCarrito);
    botonDeAgregarAlCarrito.innerHTML = `<button class="btn flamenco-regular fst-italic fs-4 shadow-lg fw-bolder bg-success-subtle border-success rounded">(+) Agregar al Carrito</button>`
    document.getElementById("contenedorProductoIndividual").appendChild(botonDeAgregarAlCarrito);
}

renderProducto();
renderBotonCarrito();
