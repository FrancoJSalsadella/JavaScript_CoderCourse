function renderCarrito(){
    const carrito = obtenerCarritoLS();
    let contenidoTabla = "";
    if (productosCarrito() > 0) {
        contenidoTabla += `<table class="table table-success table-striped">
        <tbody>
            <tr id="parteSuperiorCarrito">
                <td class=""></td>
                <td class=""></td>
                <td class=""></td>
            </tr>`;
        for (const producto of carrito) {
            contenidoTabla += `<tr id="lineaDeProductoEnCarrito" class="text-center justify-items-center">
                <td class="text-center"><img src="${producto.imagen}" alt="${producto.nombre}" heigth="60" width="60" class=""/></td>
                <td class="flamenco-regular fs-4 pt-4 fst-italic colorDeFuente text-start">${producto.nombre}</td>
                <td class="protest-revolution-regular fs-4 pt-4 fw-bolder colorDeFuente text-start">${producto.precio}$usd</td>
                <td class=""><button id="tachitoDeBasura" class="mt-2 justify-content-center text-start btn colorOro" onclick="borrarProductoCarrito(${producto.id})" title="Borrar producto seleccionado..."><img src="images/trash3-fill.svg" alt="iconoEliminarProducto" heigth="30" width="30" class=""/></button></td>
            </tr>`
        }
        contenidoTabla += `<tr id="parteInferiorCarrito">
            <td class="flamenco-regular fs-2 pt-2 fw-bolder colorDeFuente">Total a pagar:</td>
            <td class=""></td>
            <td class="fs-3 protest-revolution-regular pt-3 fw-bolder colorDeFuente text-start">${sumaTotalCarrito()}$usd</td>
        </tr>
        </tbody>
        </table>`;
    }else{
        contenidoTabla = `<div class="p-5 m-5"><div class="alert alert-success protest-revolution-regular fw-bolder colorDeFuente text-center fs-1 fst-italic" role="alert">No se encontraron productos en el carrito...</div></div>`
    }
    document.getElementById("productos").innerHTML = contenidoTabla;

    // Botón de Vaciar Carrito (x):
    let botonVaciarCarrito = document.createElement("td");
    botonVaciarCarrito.onmouseover = () => {
        botonVaciarCarrito.className = "btn-danger";
    }
    botonVaciarCarrito.addEventListener("click", vaciarCarrito);
    botonVaciarCarrito.innerHTML = `<button class="btn colorOro rounded flamenco-regular fs-5 fw-bolder" title="Borrar carrito actual...">(X) Eliminar carrito</button>`;
    document.getElementById("parteSuperiorCarrito").prepend(botonVaciarCarrito);

    // Botón de Finalizar Compra:
    let botonFinalizarCompra = document.createElement("td");
    botonFinalizarCompra.onmouseover = () => {
        botonFinalizarCompra.className = "btn-danger";
    }
    botonFinalizarCompra.addEventListener("click", finalizarCompraCarrito);
    botonFinalizarCompra.innerHTML = `<button class="btn colorOro rounded flamenco-regular fs-4 fw-bolder" title="Comprar">Comprar</button>`;
    document.getElementById("parteInferiorCarrito").append(botonFinalizarCompra);
}

renderCarrito();
renderBotonCarrito();
