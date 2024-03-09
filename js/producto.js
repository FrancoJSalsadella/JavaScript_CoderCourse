function renderProducto(){
    const producto = obtenerProductoLS()
    let renderProducto = `<div class="col"><div class="container col-md-5 text-center"><img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded" /></div>
    <div id="contenedorProductoIndividual" class="container col-md-8 text-center">
        <h1 class="colorDeFuente protest-revolution-regular fst-italic fs-1 fw-bolder py-3">${producto.nombre}</h1>
        <p class="colorDeFuente flamenco-regular fs-3">${producto.descripcion}</p>
        <p class="colorDeFuente protest-revolution-regular fs-2 fw-bolder">${producto.precio}$USD</p>
    </div>`;
    document.getElementById("producto").innerHTML = renderProducto;
    
    let botonDeAgregarAlCarrito = document.createElement("p");
    botonDeAgregarAlCarrito.addEventListener("click", agregarProductoAlCarrito);
    botonDeAgregarAlCarrito.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado!",
            duration: 1500,
            className: "flamenco-regular fs-5 fst-italic",
            destination: "carrito.html",
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(225deg, #0c3c31, #e6b450)",
            },

        }).showToast();
    });
    botonDeAgregarAlCarrito.innerHTML = `<button class="btn flamenco-regular fst-italic fs-4 shadow-lg fw-bolder bg-success-subtle border-success rounded">(+) Agregar al Carrito</button>`
    document.getElementById("contenedorProductoIndividual").appendChild(botonDeAgregarAlCarrito);
}

renderProducto();
renderBotonCarrito();
