//Simulador de un carrito de e-commerce... PreEntrega 1 - Salsadella Franco José

// Las 2 siguientes funciones sólo acumulan montos y los devuelven.
function acumularAlfombras(op, monto) {
    switch (op) {
        case "1":
            monto += 400;
            break;
        case "2":
            monto += 500;
            break;
        case "3":
            monto += 550;
            break;
        default:
            alert("Esa opción no está contemplada.");
            break;
    }
    return monto
}


function acumularDelicias(op, monto) {
    switch (op) {
        case "1":
            monto += 15;
            break;
        case "2":
            monto += 25;
            break;
        case "3":
            monto += 50;
            break;
        case "4":
            monto += 10;
            break;
        default:
            alert("Esa opción no está contemplada.");
            break;
    }
    return monto
}

// función que sólo tiene la intención de no repetir código.
function saludarYMostrarCarrito(monto) {
    alert("El total acumulado en su carrito fue de: $ " + monto)
    alert("¡Muchas gracias y vuelva pronto!\n¡Sultan's Delights!\nA dream to be remembered...")
}

// función del script principal que hace llamado al resto de funciones para mayor prolijidad y compactación de código.
function main() {
    alert("¡Bienvenido a Sultan's Delights!")
    let montoCarrito = 0
    let opcionDelicias = prompt("Ingrese la opción que guste añadir a su carrito:\n Su monto actual es de $ "+ montoCarrito +"\n 1- Delicia de Chocolate\n 2- Delicia de Pistachos\n 3- Delicia de Granada\n 4- Delicia de Miel\n 0- SALIR");
    while (opcionDelicias != "0") {
        montoCarrito = acumularDelicias(opcionDelicias, montoCarrito)
        opcionDelicias = prompt("Ingrese la opción que guste añadir a su carrito:\n Su monto actual es de $ "+ montoCarrito +"\n 1- Delicia de Chocolate\n 2- Delicia de Pistachos\n 3- Delicia de Granada\n 4- Delicia de Miel\n 0- SALIR");
    }
    if (montoCarrito <= 150) {
        let res = prompt("¿Desea ver alguna de nuestras alfombras mágicas?\n1- Sí, deseo verlas.\n2- No, muchas gracias.")
        while (res != "1" && res != "2") {
            alert("Esa opción no está contemplada.");
            res = prompt("¿Desea ver alguna de nuestras alfombras mágicas?\n1- Sí, deseo verlas.\n2- No, muchas gracias.")
        }
        if (res == "1"){
            let opcionAlfombras = prompt("Ingrese la opción que guste añadir a su carrito:\n Su monto actual es de $ "+ montoCarrito +"\n 1- Alfombra oriental\n 2- Alfombra persa\n 3- Alfombra marroquí\n 0- SALIR");
            while (opcionAlfombras != "0") {
                montoCarrito = acumularAlfombras(opcionAlfombras, montoCarrito)
                opcionAlfombras = prompt("Ingrese la opción que guste añadir a su carrito:\n Su monto actual es de $ "+ montoCarrito +"\n 1- Alfombra oriental\n 2- Alfombra persa\n 3- Alfombra marroquí\n 0- SALIR");
        }}
    }
    saludarYMostrarCarrito(montoCarrito)
}

// una sola llamada a la función principal en el script global.
main()

// es un simulador sencillo e interactivo que tiene la finalidad de cumplir con la PreEntrega1 con las herramientas disponibles hasta ahora.