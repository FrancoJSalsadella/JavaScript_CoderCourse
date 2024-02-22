function renderCarrito(){
    const carrito = obtenerCarritoLS();
    let contenido = "";
    if (productosCarrito() > 0) {
        contenido += `<table class="table table-success table-striped">
        <tbody>
        <tr>
        <td class="text-start ps-5"><button class="btn colorOro rounded flamenco-regular fs-5 fw-bolder" onclick="vaciarCarrito()" title="Borrar carrito actual...">(X) Eliminar carrito</button></td>
        <td class=""></td>
        <td class=""></td>
        <td class=""></td>
        </tr>
        `;
        for (const producto of carrito) {
            contenido += `<tr class="text-center justify-items-center">
            <td class="text-center"><img src="${producto.imagen}" alt="${producto.nombre}" heigth="60" width="60" class=""/></td>
            <td class="flamenco-regular fs-4 pt-4 fst-italic colorDeFuente text-start">${producto.nombre}</td>
            <td class=" protest-revolution-regular fs-4 pt-4 fw-bolder colorDeFuente text-start">${producto.precio}$usd</td>
            <td class=""><button class="mt-2 justify-content-center text-start btn colorOro" onclick="borrarProductoCarrito(${producto.id})" title="Borrar producto seleccionado..."><img src="images/trash3-fill.svg" alt="iconoEliminarProducto" heigth="30" width="30" class=""/></button></td>
            </tr>`
        }
        contenido += `<tr>
        <td class="flamenco-regular fs-2 pt-2 fw-bolder colorDeFuente">Total a pagar:</td>
        <td class=""></td>
        <td class="fs-3 protest-revolution-regular pt-3 fw-bolder colorDeFuente text-start">${sumaTotalCarrito()}$usd</td>
        <td class=""><button class="btn colorOro rounded flamenco-regular fs-4 fw-bolder" onclick="finalizarCompraCarrito()" title="Comprar">Comprar</button></td>
        </tr>
        </tbody>
        </table>`;
    }else{
        contenido = `<div class="p-5 m-5"><div class="alert alert-success protest-revolution-regular fw-bolder colorDeFuente text-center fs-1 fst-italic" role="alert">No se encontraron productos en el carrito...</div></div>`
    }
    document.getElementById("productos").innerHTML = contenido;
}

renderCarrito();
renderBotonCarrito();

