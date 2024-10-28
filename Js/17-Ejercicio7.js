
'use strict'

/**
 * 
 * Tabla de multiplcar de un numero introducido por pantalla
 * 
 */

var numero = parseInt(prompt("¿De que número quieres la tabla?",1));

document.write("<h1>Tabla del " +numero+ "</h1>");
for(var i = 1; i <= 10; i++){
    document.write(numero+" x "+i+" = "+(i*numero)+"</br>");
   /* 
   *
   *POR SI QUIERE VER 1 POR 1
   *alert(numero+" x "+i+" = "+(i*numero));
   */
}

/**
 * 
 * Todas
 * 
 */

 for(var c = 1; c <= 10; c++){
    document.write("<h1>Tabla del " +c+ "</h1>");
    for(var i = 1; i <= 10; i++){
        document.write(c+" x "+i+" = "+(i*c)+"</br>");
  }
}
