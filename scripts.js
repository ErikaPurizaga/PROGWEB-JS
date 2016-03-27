/*console.log("Inicio de programa");
alert("Hola JavaScript");																																																							
document.write("<h1>Hola JavaScript!</h1>");
alert("Gracias por visitar");
console.log("Fin de programa");*/ /*error corregido  de mas*/


/*VARIABLES*/
/*console.log("Inicio de programa");
var nombre = prompt("Cual es tu nombre?");
document.write ("<h1> Su nombre es " +nombre);
console.log("Su nombre es:" +nombre);
console.log("Fin de Programa");*/


/*variables ejercicios
var clave =prompt("Hola Usuario,Ingrese su clave en minusculas!");
console.log("La longitud de la clave:" + clave.length);
console.log("TA-DA!!! Su clave es:"+ clave.toUpperCase());
console.log("El valor de la clave es:" + clave);*/

/*Desafio Cuenta Cuentos - Concatenacion - CUENTA REGRESIVA DE PREGUNTAS
console.log("Inicio del Programa");
var preguntas = 3;
var preguntasFaltantes = "Quedan " + preguntas + " preguntas";

var sustantivo =prompt("Hola ,Ingresa un sustantivo! " +  preguntasFaltantes);
preguntas = preguntas-1;
preguntasFaltantes = "Quedan " + preguntas + " preguntas";
var adjetivo =prompt("Hola ,Ingresa un adjetivo! " +preguntasFaltantes);
preguntas -= 1;
preguntasFaltantes = "Quedan " + preguntas + " preguntas";
var verbo =prompt("Ingresa un verbo en infinitivo! " + preguntasFaltantes);
document.write("<h1>El "+ adjetivo + " "+ sustantivo + " queria " + verbo + " con sus amigos en el patio de su caleta");
document.write("<h1>El "+ sustantivo + " "+ adjetivo + " queria " + verbo + " antes de pegarse un bañito");
document.write("<h1>El "+ adjetivo + " "+ sustantivo + " queria " + verbo + " solo porque quería ser popular");
console.log("Programa Completado")*/


/*random*/
/*console.log("Inicio  del programa");
var dado=Math.floor(Math.random()*6)+1;
alert("Dado dice: "  + dado);

var numero =prompt("Ingresa un numero entero ");
var aleatorio=Math.floor(Math.random()*numero);
alert("Aleatorio de 1 hasta "  + numero + " es " + aleatorio);
console.log("Programa Completado");*/

/*CONDICIONALES*/
/*console.log ("Inicio del Programa");
var numero = prompt("Ingrese un numero entre el 1 al 5:");
var numeroAAdivinar=Math.floor(Math.random()*5);
if (numero == numeroAAdivinar) {
	alert (" Wow! Has adivinado el numero");
}
else
{
	alert ("Has Fracasado!!! buu!");
}
console.log ("Fin del Programa");*/



/*MULTIPLES CONDICIONALES  IF-ELSEIF*/
console.log ("Inicio del Programa");
var adivionoCorrectamente=false;
document.write ("<h1> ADIVINA EL NUMDERO!!</h1>");
var numeroAAdivinar=Math.floor(Math.random()*10)+1;
var numeroUsuario = prompt("Ingrese un numero entre el 1 al 10:");

if (parseInt(numeroUsuario)== numeroAAdivinar){
	alert ("Wow!!Has adivinado el numero");

}
 else{
 		
 		if(numeroAAdivinar>=numeroUsuario){
		 			alert (" Me dijeron q el numero es mayor al que ingresaste intenta otra vez");
		 			var numeroAAdivinar = prompt("Ingrese un numero entre el 1 al 10:");
		 			if (parseInt(numeroUsuario)== numeroAAdivinar){
						adivionoCorrectamente=true;
						}
					else
					{
						adivionoCorrectamente=false;
					}
 			} 
 		else{
	 			alert (" Me dijeron q el numero es menor al que ingresaste");
	 			var numeroAAdivinar = prompt("Ingrese un numero entre el 1 al 10:");
	 			if (parseInt(numeroUsuario)== numeroAAdivinar){
					adivionoCorrectamente=true;
					}
				else
				{
					adivionoCorrectamente=false;
				}
 			}
 		if(adivionoCorrectamente==true){
 			alert ("Wow!!Has adivinado el numero");
 			}
 		else{

 		alert ("Has Fracasado!!! buu!");
			}	
 }

console.log ("Fin del Programa");




