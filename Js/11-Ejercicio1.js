
/*
Programa que pida 2 numeros, que nos diga cual es el mayor, menor
y si son iguales
*/

var numero1 = parseInt(prompt('Introduce 1 numero', 0));
var numero2 = parseInt(prompt('Introduce otro numero', 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce 1 numero', 0));
    numero2 = parseInt(prompt('Introduce otro numero', 0));
}

if(numero1 == numero2){
    alert("Los numeros son iguales");

}else if(numero1 > numero2){
    alert("El numero mayor es: " + numero1);
    alert("El numero menor es: " + numero2);

}else if(numero2 > numero1){
    alert("El numero mayor es: " + numero2);
    alert("El numero menos es: " + numero1);
}else{
    alert("Introduce bien los numeros aguevados");
}