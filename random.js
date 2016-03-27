console.log ("Inicio del Programa");
function tiraDados (){
	var dado = Math.floor(Math.random()*6)+1;
	return dado;//aumentamos return
}
alert("Tiramos 3 dados ");
alert("El dado dice:"+ tiraDados);
var multiplo = 2 * tiraDados();
alert("El multiplo de bonus es :" +multiplo);
