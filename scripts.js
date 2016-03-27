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



/*MULTIPLES CONDICIONALES  IF-ELSEIF - Adivina el  numero con ayuda*/
/*console.log ("Inicio del Programa");
var adivinoCorrectamente=false;
document.write ("<h1> ADIVINA EL NUMERO!!</h1>");
var numeroAAdivinar=Math.floor(Math.random()*10)+1; // El numero a adivinar usa el metodo random entre numeros del 1 al 10 math.fllor es para que sena enteros
var numeroUsuario = prompt("Ingrese un numero entre el 1 al 10:");

if (parseInt(numeroUsuario)== numeroAAdivinar){// comparacion entre el numero ingresado y el numero aleatorioa a adivinar
	alert ("Wow!!Has adivinado el numero");

}
 else{
 		
 		if(numeroAAdivinar>=numeroUsuario){//numero a adivinar mayor o igual al numero ingresado por el usuario
		 			alert (" Me dijeron q el numero es mayor al que ingresaste intenta otra vez");
		 			var numeroAAdivinar = prompt("Ingrese un numero entre el 1 al 10:");//ingresar numero entre el 1 al 10
		 			if (parseInt(numeroUsuario)== numeroAAdivinar){// comparacion entre el numero ingresado y el numero aleatorioa a adivinar
						adivinoCorrectamente=true;//el usuario acerto el numero
						}
					else
					{
						adivinoCorrectamente=false;//el usuario no acerto el numero
					}
 			} 
 		else{ //caso contrario numero a adivinar mayor o igual al numero ingresado por el usuario es decir menor
	 			alert (" Me dijeron q el numero es menor al que ingresaste");
	 			var numeroAAdivinar = prompt("Ingrese un numero entre el 1 al 10:");//ingresar numero entre el 1 al 10
	 			if (parseInt(numeroUsuario)== numeroAAdivinar){// comparacion entre el numero ingresado y el numero aleatorioa a adivinar
						adivinoCorrectamente=true;//el usuario acerto el numero
					}
				else
				{
					adivinoCorrectamente=false;//el usuario no acerto el numero
				}
 			}
 		if(adivinoCorrectamente==true){
 			alert ("Wow!!Has adivinado el numero");
 			}
 		else{

 		alert ("Has Fracasado!!! buu!");
			}	
 }

console.log ("Fin del Programa");*/

/*FUNCIONES Y RETURN*/

/*console.log ("Inicio del Programa");
function tiraDados (){
	var dado = Math.floor(Math.random()*6)+1;
	return dado;//aumentamos return
}
alert("Tiramos 3 dados ");
alert("El dado dice: "+ tiraDados);
var multiplo = 2 * tiraDados();
alert("El multiplo de bonus es : " +multiplo);*/


/*ARGUMENTOS REN LAS FUNCIONES */
/*console.log("Inicio Programa");
function numeroAlAzarHastaLimite (limite){
	var num=Math.floor(Math.random()*limite) + 1;
	return num;}
	var numAzar = numeroAlAzarHastaLimite(100) ;
	alert( "El numero al azar es:" + numAzar);
console.log("Fin Programa");*/


/*FUNCION MAXIMO ENTRE 2 NUMEROS*/
/*console.log ("Inicio del Programa");
document.write("Encontrar el maximo entre 2 numeros");
var numero1  =prompt("Ingrese el primer numero ");
var numero2 =prompt("Ingrese el segundo numero");

	if (numero1< numero2){
		
		alert("El maximo entre los 2 numeros es " + numero2);
	}
	else {
		alert("El maximo entre los 2 numeros es " +  numero1);
		
	}*/



/*AMBITO DE LAS VARIABLES*/
/*function saludo(){
	 mensaje ="Hola a todos"; // VARIABLE GLOBAL SOBREVIVE DURANTE TODO EL CODIGO 
	alert(mensaje);
}
var mensaje ="chao";
saludo();
alert(mensaje);
saludo();*/

/* THROW EROR*/
/*console.log("Inicio del Programa");
var num="hola";
if(isNaN(num))
{
	throw new Error("No es un numero valido");
}
else { num=num*0.5;}*/




/*DESAFIO RANDOM ENTRE 2 NUMEROS CON FUNCION Y THROW WERROR*/

console.log("Inicio del Programa");

function numeroAlAzarHastaLimite (limiteInf , limiteSup){
	if (isNaN(limiteInf)&& isNaN(limiteSup))
	{
		throw new Error ("It is not a number");
	}
	var num= Math.round(Math.random()*(limiteSup - limiteInf)) + limiteInf;
	return num;
}

var limiteInf=prompt("Ingrese limite inferior:");
var limiteSup=prompt("Ingrese limite Superior");
alert("Su numero al Azar es:" + numeroAlAzarHastaLimite(parseInt(limiteInf), parseInt(limiteSup)));


var contador =0;
while(contador<10) //AGREGAMOS UN WHUILE CON CONTADOR MIENTRAS EL CONTADOR SEA MENOR QUE 10 VA A MOSTRAR 10 NUMEROS RANDON DNTRO DE LOS LIMITES
{
	var randomico= numeroAlAzarHastaLimite(parseInt(limiteInf), parseInt(limiteSup));
	document.write(randomico + "  ");
	contador++;
}
	
console.log ("Fin del Programa");


















