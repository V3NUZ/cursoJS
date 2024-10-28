
'use strict'

/**
 * 
 * Decir si un numero es par o impar si no es valido que nos pida de nuevo el numero
 * 
 */

var number = parseInt(prompt("Ingrese un numero",0));

while(isNaN(number)){
    var number = parseInt(prompt("Ingrese un numero valido tonto",0));
    
}
    if(number % 2 == 0 ){
    alert("Es par buena esa");    

}else{
    alert("Es impar tonto");
}