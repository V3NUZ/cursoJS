// Parameters REST y SPREAD

function listedFruits(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}

listedFruits("Naranja", "Manzana", "Sandia", "Pera", "Melon");

var Fruits = [ "Naranja", "Manzana"]
listedFruits("Naranja", "Manzana", "Sandia", "Pera", "Melon");