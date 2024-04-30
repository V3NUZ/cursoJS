
/**
 * 
 * Muestre todos los numeros divisores de un numero introducidos en un promp
 * 
 */

var numero = parseInt(prompt("Introduce un numero ",1));

for(var i = 1; i <= numero; i++){
  
//Numero siendo dividido por i que si da 0 es divisor y es resultado    
    if(numero%i == 0){
        console.log("Divisores: "+i);
    }
}