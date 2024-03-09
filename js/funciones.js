
fetch("./js/productos.json")
.then(response => response.json())
.then(data => {
    productos = data;
    guardarProductosLS(productos)
}).catch(error => {
    console.log("Error al cargar el archivo.json!!!");
});

//Funciones genéricas
const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const verProductoIndividual = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
}

const obtenerProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

const obtenerIdProductoLS = () => {
    return JSON.parse(localStorage.getItem("producto")) || 0;
}

const obtenerProductoLS = () => {
    const productos = obtenerProductosLS();
    const id = obtenerIdProductoLS();
    const producto = productos.find(item => item.id === id);
    return producto;
}

// Funciones de funcionamiento del Carrito
const guardarCarritoLS = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const productosCarrito = () => {
    const carrito = obtenerCarritoLS();
    return carrito.length;
}

const renderCantidadProductosCarrito = () => {
    document.getElementById("cantidadProductosEnCarrito").innerHTML = productosCarrito();
}

const agregarProductoAlCarrito = () => {
    const producto = obtenerProductoLS();
    const carrito = obtenerCarritoLS();
    carrito.push(producto);
    guardarCarritoLS(carrito);
    renderBotonCarrito();
}

const renderBotonCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = productosCarrito();
}

const sumaTotalCarrito = () => {
    const carrito = obtenerCarritoLS();
    return carrito.reduce((acum, prod) => acum += prod.precio, 0)
}

const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    renderBotonCarrito();
    renderCarrito();
}

const borrarProductoCarrito = (id) => {
    const carrito = obtenerCarritoLS();
    const carritoNuevo = carrito.filter(item => item.id !== id);
    guardarCarritoLS(carritoNuevo);
    renderBotonCarrito();
    renderCarrito();
}

const finalizarCompraCarrito = () => {
    Swal.fire({
        title: "<h1 class='protest-revolution-regular fs-2 fst-italic fw-bolder'>¡¡¡Gracias por tu compra!!!</h1>",
        color: "#0c3c31",
        imageUrl: "https://www.starmoontours.com/Upload/turkish-delight-min_n.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Sultan's Delights",
        background: "linear-gradient(225deg, #e6b450, rgb(253, 238, 215))",
    });
    vaciarCarrito();
}
