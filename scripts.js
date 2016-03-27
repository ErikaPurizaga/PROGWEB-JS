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

/*Desafio Cuenta Cuentos - Concatenacion
var sustantivo =prompt("Hola ,Ingresa un sustantivo!");
var adjetivo =prompt("Hola ,Ingresa un adjetivo!");
var verbo =prompt("Hola ,Ingresa un verbo en infinitivo!");
document.write("<h1>El "+ adjetivo + " "+ sustantivo + " queria " + verbo + " con sus amigos en el patio de su caleta");
document.write("<h1>El "+ sustantivo + " "+ adjetivo + " queria " + verbo + " antes de pegarse un bañito");
document.write("<h1>El "+ adjetivo + " "+ sustantivo + " queria " + verbo + " solo porque quería ser popular");*/

/*NUMEROS-27/03*/

/*var segundosPorMinuto=60;
var minutosPorHora=60;
var horasPorDia=24;
var diasPorAño=365;
var segundosPorDia=segundosPorMinuto*minutosPorHora*horasPorDia;
var años = prompt("Ingrese sus años de vida:");
var diasDeVida= diasPorAño*años;
document.write("<h1>Días de Vida</h1><p> Usted ha vivido " + diasDeVida + " días hasta el presente año</p>"); 
document.write("<h1>Calculadora del Tiempo</h1><p> Hay " + segundosPorDia + " segundos  en un dia</p>");*/

/* Casting =camnbiar un tipo de dato string a numero con ParseInt*/
console.log("Inicio de Programa")
var peliculasVistas=prompt("Cuantas peliculas has visto este mes?");
var seriesVistas=prompt("Cuantas series has visto este mes?");
var tiempoPantalla=parseInt(peliculasVistas) + parseInt(seriesVistas);
alert('Wow! Has visto ' + tiempoPantalla + " veces minimo la pantalla");
console.log("Progrma Completado")