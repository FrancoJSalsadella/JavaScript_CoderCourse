const productos = [
    { id: 1, nombre: "Sultán de Chocolate y Coco", descripcion: "Delicia de arrollado hecho a base de coco y chocolate. Mano gourmet otomana.", pistacho: false, precio: 30 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2019/11/sultan-turkish-delight-with-chocolate-coconut-500x500.jpg"},
    { id: 2, nombre: "Sultán de Pistacho y Coco", descripcion: "", pistacho: true, precio: 30 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2019/11/sultan-turkish-delight-with-pistachio-coconut-500x500.jpg"},
    { id: 3, nombre: "Sultán cubierto de Pistacho", descripcion: "", pistacho: true, precio: 30 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2019/11/pistachio-covered-sultan-turkish-delight-500x500.jpg"},
    { id: 4, nombre: "Delicia turca de Avellana", descripcion: "", pistacho: false, precio: 20 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2017/12/hazelnut-turkish-delight-500x500.jpg"},
    { id: 5, nombre: "Delicia turca de Miel y Azúcar impalpable", descripcion: "", pistacho: false, precio: 20 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2017/12/plain-turkish-delight-2-500x500.jpg"},
    { id: 6, nombre: "Delicia turca de Limón y Azúcar impalpable", descripcion: "", pistacho: false, precio: 20 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2017/12/gum-mastic-turkish-delight-500x500.jpg"},
    { id: 7, nombre: "Turrón de Granada y Pistacho", descripcion: "", pistacho: true, precio: 25 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/kadayifli-narli-fistikli-kesme-fitil-1542c235-145d-4965-b94c-20e5dca9246f-Kopya-500x500.jpg"},
    { id: 8, nombre: "Turrón de Miel y Pistacho", descripcion: "", pistacho: true, precio: 25 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/toz-fistikli-balli-fistikli-kesme-fitil-f103b3e3-29a8-4031-992b-0272b38e1c95-1-500x500.jpg"},
    { id: 9, nombre: "Caja Deluxe Delicias de Frutos Secos", descripcion: "", pistacho: true, precio: 150 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2020/02/nuts-and-delight-box-2-scaled-500x500.jpg"},
    { id: 10, nombre: "Caja Deluxe Delicias Premium", descripcion: "", pistacho: true, precio: 250 , imagen: "https://www.grandturkishbazaar.com/wp-content/uploads/2019/11/permium-delight-box-hafiz-mustafa-1-500x500.jpg"},
]

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const obtenerProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

const guardarCarritoLS = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const obtenerCantidadProductosCarrito = () => {
    const carrito = obtenerCarritoLS();
    return carrito.lenght();
}

const renderCantidadProductosCarrito = () => {
    document.getElementById("cantidadProductosEnCarrito").innerHTML = obtenerCantidadProductosCarrito();
}

const guardarIdProductoIndividualLS = (id) => {
    localStorage.setItem("producto", JSON.stringify(id))
}

const obtenerIdProductoLS = () => {
    console.log(JSON.parse(localStorage.getItem("producto")) || 0)
    return JSON.parse(localStorage.getItem("producto")) || 0;
}

const obtenerProductoLS = () => {
    const productos = obtenerProductosLS();
    const id = obtenerIdProductoLS();
    const producto = productos.find(item => item.id == id);
    return producto;
}

guardarProductosLS(productos)
