
/*
Utiliza bucle para la suma media hasta meter un negativo y dar la media
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('Introduce numero hasta que sea uno negativo',0 ));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;

        contador++;
    }

    console.log(suma);
    console.log(contador);

}while(numero >= 0)

alert("La suma de todos los numeros es: " + suma);
alert("La media de todos los numero es: " + (suma/contador));