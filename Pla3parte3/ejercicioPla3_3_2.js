/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion sumaDiezNumeros / ejercicioPla3_3_2.js 
*
*     @author     Juan Jose Gonzalez Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 -Suma los números entre si de una cadena enviada con la función SumaDiezNumeros
*     
*	   ------------------------------------------------------------------------------------------------------
*/
function sumaDiezNumeros(numeros){
	var suma=parseInt(numeros.charAt(i));
	document.write("De los numeros "+ numeros+"<br>"); 
	for (var i=1; i<numeros.length; i++){
		document.write("<br>"+ suma+" + " + numeros.charAt(i) +" = " );
		 suma =suma + parseInt(numeros.charAt(i));
			 document.write(suma);
		}
	document.write("<br> El total es: "+suma);
	return	suma;
}