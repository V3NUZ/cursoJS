
/** 
*
*Mostrar los numero que van en la mitad de 2 numeros
*
*/

var numero1 = parseInt(prompt("Introduce un numero",0));
var numero2 = parseInt(prompt("Introduce otro numero",0));
var i;

/* Escribir en la pagina*/
document.write("<h2>De " +numero1+ " a " +numero2+ " Estan estos numeros: </h2>");
for(i = numero1; i <= numero2; i++){
    document.write(i+"</br>");

}