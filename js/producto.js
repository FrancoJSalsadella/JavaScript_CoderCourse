function renderProducto(){
    const producto = obtenerProductoLS()
    let renderProducto = `<div class="container col-md-6 offset-md-3 text-center">
    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
    <p class="colorDeFuente protest-revolution-regular fst-italic fs-2 fw-bolder py-3">${producto.nombre}</p>
    <p class="colorDeFuente flamenco-regular fs-3">${producto.descripcion}</p>
    <p class="colorDeFuente protest-revolution-regular fs-1 fw-bolder">u$d${producto.precio}</p>
    </div>`;
    document.getElementById("producto").innerHTML = renderProducto;
}

renderProducto()
