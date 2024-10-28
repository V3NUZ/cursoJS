/**
 * FUNCIONES
 *
 * Una funcion es una agrupacion reutilizable de un conjunto de instrucciones
 *
 */

function porConsole(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
}

function porPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "<br>");
    document.write("Resta: " + (numero1 - numero2) + "<br>");
    document.write("Multiplicacion: " + (numero1 * numero2) + "<br>");
    document.write("Division: " + (numero1 / numero2) + "<br>");
}

// Definir una funcion
function calculator(numero1, numero2, mostarar = false) {

    if (mostarar == false) {
        porConsole(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }

    return true;
}

calculator(1, 4);
calculator(2, 5, true);
