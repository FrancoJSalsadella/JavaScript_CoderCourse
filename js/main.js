
function darBienvenida() {
    console.log("¡Bienvenido a Sultan's Delights!")
}

// Array de productos
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

function listarCatalogo() {
    let listado = ""
    productos.forEach(prod => listado += ("#" + prod.id + " - " + prod.descripcion + " - $" + prod.precio + "\n"))
    return listado
}


// Clase Carrito
class Carrito {
    constructor() {
        this.productos = []
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
    listarCarrito() {
        let listado = ""
        this.productos.forEach(item => listado += "#" + item.id + " - " + item.descripcion + " - $" + item.precio + "\n")
        return listado
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


function main() {
    // creación del carrito
    const carrito = new Carrito();

    // creación del menú de opciones de Catálogo
    let productoSeleccionado = -1;
    while (productoSeleccionado != 0) {
        productoSeleccionado = parseInt(prompt("\t\t\t\t\t\t\t\t¡Bienvenido a Sultan's Delights!\t\t\t\t\t\t\t\t\nSeleccione lo que desee agregar al Carrito:\nPresione '0' para SALIR.\n" + listarCatalogo()))
        if (productoSeleccionado == 0){
            break;
        }
        carrito.agregarProductoAlCarrito(productoSeleccionado);
        "Listado del Carrito:\n" + carrito.listarCarrito();
    }

    // informe de total a pagar
    let listadoCarrito = carrito.listarCarrito();
    let valorPagar = carrito.sumarProductos();
    let impuestos = carrito.calcularImpuestos();
    let valorFinal = valorPagar + impuestos;
    if (valorPagar < 100) {
        alert("\t\t\t\t\t\t\t\tDetalle de compra:\t\t\t\t\t\t\t\t\n" + listadoCarrito + "\nComo su compra fue menor a $100, está exenta de impuestos.\n" + "\t\tTotal a pagar: $" + valorPagar);
    }else{
        alert("\t\t\t\t\t\t\t\tDetalle de compra:\t\t\t\t\t\t\t\t\n" + listadoCarrito + "\n\t\tTotal productos: $" + valorPagar + "\n\t\tTotal impuestos: $" + impuestos + "\n\t\tTotal a pagar: $" + valorFinal);
    }
}


main()
