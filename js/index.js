
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

        //Boton Sin Pistacho
        let productosSinPistacho = productos.filter(item => item.pistacho == false)
        let botonSinPistacho = document.getElementById("filtradoPorPistacho")
        botonSinPistacho.addEventListener("click", () => {
            document.getElementById("productos").innerHTML = "";
            let tarjetaProducto = ""
            for (const producto of productosSinPistacho) {
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

        //Boton Sultanes
        let productosSultanes = productos.filter(item => item.categoria === "sultan")
        let botonSultanes = document.getElementById("filtradoPorSultanes")
        botonSultanes.addEventListener("click", () => {
            document.getElementById("productos").innerHTML = "";
            let tarjetaProducto = ""
            for (const producto of productosSultanes) {
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

        //Boton Delicias
        let productosDelicias = productos.filter(item => item.categoria === "delicia")
        let botonDelicias = document.getElementById("filtradoPorDelicias")
        botonDelicias.addEventListener("click", () => {
            document.getElementById("productos").innerHTML = "";
            let tarjetaProducto = ""
            for (const producto of productosDelicias) {
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

        //Boton Turrones
        let productosTurrones = productos.filter(item => item.categoria === "turron")
        let botonTurrones = document.getElementById("filtradoPorTurrones")
        botonTurrones.addEventListener("click", () => {
            document.getElementById("productos").innerHTML = "";
            let tarjetaProducto = ""
            for (const producto of productosTurrones) {
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

        //Boton CajasDeluxe
        let productosCajasDeluxe = productos.filter(item => item.categoria === "cajaDeluxe")
        let botonCajasDeluxe = document.getElementById("filtradoPorCajasDeluxe")
        botonCajasDeluxe.addEventListener("click", () => {
            document.getElementById("productos").innerHTML = "";
            let tarjetaProducto = ""
            for (const producto of productosCajasDeluxe) {
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
    })
}





renderProductos();
renderBotonCarrito();
