/** 
 * 
 * Mostara todos los numeros impares que se intrdoduzcan por el usuario
 * 
*/

var num1 = parseInt(prompt("Introduce un numero: ",0));
var num2 = parseInt(prompt("Introduce otro numero: ",0));
var i;

while(num1<num2){
    num1++;
    
    if(num1%2 !=0){
        console.log("El " +num1+ " es impar");
    }
}
