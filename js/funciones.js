const productos = [
    { id: 1, nombre: "Sultán de Chocolate y Coco", descripcion: "Azúcar, Pistacho, Coco en polvo, Almidón de maíz, Reguladores de acidez, Crema de turrón de chocolate.", pistacho: false, precio: 25 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2019/11/sultan-turkish-delight-with-chocolate-coconut-500x500.jpg"},
    { id: 2, nombre: "Sultán de Pistacho y Coco", descripcion: "Delicia de arrollado hecho a base de pistacho y coco crema de turrón. Una combinación deliciosa y de tradición otomana.", pistacho: true, precio: 25 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2019/11/sultan-turkish-delight-with-pistachio-coconut-500x500.jpg"},
    { id: 3, nombre: "Sultán cubierto de Pistacho", descripcion: "Azúcar, Pistacho, Pistacho en polvo, Almidón de maíz, Reguladores de acidez, Crema de turrón.", pistacho: true, precio: 20 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2019/11/pistachio-covered-sultan-turkish-delight-500x500.jpg"},
    { id: 4, nombre: "Delicia turca de Avellana", descripcion: "Masilla dulce con trozos de avellana espolvoreada con azúcar impalpable. Recomendada para los no tan amantes del pistacho.", pistacho: false, precio: 5 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2017/12/hazelnut-turkish-delight-500x500.jpg"},
    { id: 5, nombre: "Delicia turca de Miel y Azúcar impalpable", descripcion: "Masilla hecha a base de miel, muy dulce y suave al gusto. Espolvoreada de azúcar impalpable. Recomendada para los no tan amantes del pistacho.", pistacho: false, precio: 20 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2017/12/plain-turkish-delight-2-500x500.jpg"},
    { id: 6, nombre: "Delicia turca de Limón y Azúcar impalpable", descripcion: "Masilla turca hecha a base de limón para una tonada más ácida pero muy deliciosa. Espolvoreada con azúcar impalpable. Recomendada para los no tan amantes del pistacho.", pistacho: false, precio: 20 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2017/12/gum-mastic-turkish-delight-500x500.jpg"},
    { id: 7, nombre: "Turrón de Granada y Pistacho Crujiente", descripcion: "Turrón a base de masilla de granada y pistachos. Con un recubierto de cereales bañados en chocolate.", pistacho: true, precio: 30 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/princ-patlakli-narli-fistikli-kesme-fitil-a357f930-05c1-4334-8925-87adc8f8072c-500x500.jpg"},
    { id: 8, nombre: "Turrón de Granada y Pistacho", descripcion: "Turrón a base de masilla de granada y pistachos. Espolvoreado de cereales.", pistacho: true, precio: 30 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/kadayifli-narli-fistikli-kesme-fitil-1542c235-145d-4965-b94c-20e5dca9246f-Kopya-500x500.jpg"},
    { id: 9, nombre: "Turrón de Miel y Pistacho", descripcion: "Turrón a base de masilla de miel y pistachos para un gusto más suave. Espolvoreado de polvo de pistacho.", pistacho: true, precio: 30 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/toz-fistikli-balli-fistikli-kesme-fitil-f103b3e3-29a8-4031-992b-0272b38e1c95-1-500x500.jpg"},
    { id: 10, nombre: "Caja Deluxe Delicias de Frutos Secos", descripcion: "Bolas dulces de cezerye cubiertas de pistacho, Bolas dulces de cezerye cubiertas de avellanas, Delicias turcas de granada con pistachos y cubiertas de kadayifi, Delicias turcas de turrón con pistachos y cubiertas de kadayifi.", pistacho: true, precio: 100 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2020/02/nuts-and-delight-box-2-scaled-500x500.jpg"},
    { id: 11, nombre: "Caja Deluxe Delicias Premium", descripcion: "Grageas de chocolate con sabor a granada, Grageas de chocolate recubiertas con mezcla de frutas, Grageas de chocolate con sabor a naranja, Delicias turcas con sabor a naranja y avellanas, Delicias turcas con sabor a kiwi y pistachos, Delicias turcas con miel y nueces, Delicias turcas con turrón relleno de chocolate, Delicias turcas con turrón recubiertas de pistacho y relleno de pistacho.", pistacho: true, precio: 150 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2019/11/permium-delight-box-hafiz-mustafa-1-500x500.jpg"},
]

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
        title: "Gracias por tu compra!",
        text: "Te estaremos esperando nuevamente en Sultan's Delights.\n¡A dream to be remembered!",
        imageUrl: "https://www.starmoontours.com/Upload/turkish-delight-min_n.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Sultan's Delights"
    });
    vaciarCarrito();
}

//Script principal
guardarProductosLS(productos)
