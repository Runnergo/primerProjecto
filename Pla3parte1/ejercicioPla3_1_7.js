/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion busqueda / ejercicioPla3_1_7.js
*
*     @author     Juan José González Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 - Dada una cadena de números que inserta el usuario, contar la cantidad 
*     de veces que se repiten los numero e ingresarlos en una tabla.
*     
*	   ------------------------------------------------------------------------------------------------------
*/
function busqueda(cadena){
	var contador=0
	var tabla =[];
		for (var i=0; i<10; i++){
		tabla[i]=i+"- No esta ";
	    for (var k=0; k<cadena.length; k++){
				if (cadena.charAt(k)==i){
				contador++;
			    tabla[i]=i+"-"+contador;
				}
		}
	    contador=0
	}
	return "De la cadena "+cadena+" el orden en la tabla de las repeticiones es el siguiente:<br><br>" +tabla;
}