
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
    }
    agregarProducto(idPedido) {
        let productoAgregado = productos.find(item => item.id === idPedido);
        if (productoAgregado){
            this.productos.push(productoAgregado)
            console.log("Producto '" + item.descripcion + "' agregado al carrito con éxito!")
        }else{
            console.log("No se encontró un producto con un id: " + idPedido)
        }
    }
}





function darBienvenida() {
    alert("¡Bienvenido a Sultan's Delights!")
}


function main() {
    darBienvenida()

}


main()
