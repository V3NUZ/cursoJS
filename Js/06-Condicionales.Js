//Condicionales
//Condicional IF Si A es igual a B entonces haz algo

/*Operadores relacionales
Mayor: >
Menor: <
Mayor: o igual >=
Menos: o igual <=
Igual: ==
Distinto: !=
*/

var edad = 14;
var nombre = "Juan";

if (edad >= 18){
    console.log(nombre + " Tiene " + edad + " Es mayor de edad");

    if(edad <= 33){
        console.log('Sos gei');

    }else if(edad >= 70){
        console.log("Ya no sos gei");

    }else{
        console.log("Sos un viejo verde");
    }

}else{
    console.log(nombre + " Es menor de edad, porque tiene " + edad);
}

/* Operadores Logicos 
AND (Y): &&
OR (O): ||
NEGACION: !
*/

// Negacion
var year = 2022;

if(year != 2019){
    console.log("El año no es 2019, realmente es: " + year);
}

//AND

if(year >= 2000 && year<= 2022 && year != 2025){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos loquitos");
}

//OR

if(year == 2002 || (year >= 2022 && year == 2032)){
    console.log("El año acaba en 2");
}else{
    console.log("No es el año");
}