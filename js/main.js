
function darBienvenida() {
    console.log("¡Bienvenido a Sultan's Delights!")
}


const productos = [
    { id: 1, descripcion: "Roll de Chocolate y Coco", pistacho: false, precio: 30 },
    { id: 2, descripcion: "Roll de Pistacho y Coco", pistacho: true, precio: 30 },
    { id: 3, descripcion: "Roll cubierto de Pistacho", pistacho: true, precio: 30 },
    { id: 4, descripcion: "Delicia turca de avellana", pistacho: false, precio: 20 },
    { id: 5, descripcion: "Delicia turca de miel y azúcar impalpable", pistacho: false, precio: 20 },
    { id: 6, descripcion: "Delicia turca de limón y azúcar impalpable", pistacho: false, precio: 20 },
    { id: 7, descripcion: "Turrón de granada y pistacho", pistacho: true, precio: 25 },
    { id: 8, descripcion: "Turrón de miel y pistacho", pistacho: true, precio: 25 },
    { id: 9, descripcion: "Caja de lujo Delicias Variadas", pistacho: true, precio: 100 },
    { id: 10, descripcion: "Caja de lujo Delicias Premium", pistacho: true, precio: 200 },
]


class Carrito {
    constructor() {
        this.productos = []
        this.impuestoPais = 1.3
        this.totalPagar = 0
    }
    agregarProductoAlCarrito(idPedido) {
        let productoAgregado = productos.find(item => item.id === idPedido);
        if (productoAgregado) {
            this.productos.push(productoAgregado)
            console.log("'" + productoAgregado.descripcion + "' agregado al carrito.")
        } else {
            console.log("No se encontró un producto con un id: " + idPedido)
        }
    }
    listarCompra() {
        this.productos.forEach(item => alert(item.id + " -- " + item.descripcion + " -- $" + item.precio))
    }
    sumarProductos() {
        this.productos.forEach(item => {this.totalPagar += item.precio})
        return this.totalPagar
    }
    calcularImpuestos(){
        this.impuestos = this.totalPagar * 0.3
        return this.impuestos
    }
}


function listarCatalogo() {
    let listado = ""
    productos.forEach(prod => listado += ("#" + prod.id + " -- " + prod.descripcion + " -- $" + prod.precio + "\n"))
    return listado
}


function main() {
    // creación del carrito
    const carrito = new Carrito();

    // creación del menú de Catálogo
    let productoAgregadoCarrito = -1
    while (productoAgregadoCarrito != 0) {
        productoAgregadoCarrito = parseInt(prompt("\t\t\t\t\t\t¡Bienvenido a Sultan's Delights!\t\t\t\t\t\t\nSeleccione lo que desee agregar al Carrito:\nPresione '0' para SALIR.\n\n" + listarCatalogo()))
        if (productoAgregadoCarrito == 0){
            break;
        }
        if (productoAgregadoCarrito == 33){
            carrito.listarCompra()
        }
        carrito.agregarProductoAlCarrito(productoAgregadoCarrito);
    }

    // informe de total a pagar
    let valorPagar = carrito.sumarProductos();
    let impuestos = carrito.calcularImpuestos();
    let valorFinal = valorPagar + impuestos;
    if (valorPagar < 100) {
        alert("Como su compra fue menor a $100, está exenta de impuestos\n" + "Total a pagar: $" + valorPagar);
    }else{
        alert("Total productos: $" + valorPagar + "\nTotal impuestos: $" + impuestos + "\nTotal a pagar: $" + valorFinal);
    }
}


main()
