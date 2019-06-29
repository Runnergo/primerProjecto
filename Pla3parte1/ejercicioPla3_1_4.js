/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion busqueda / ejercicioPla3_1_4.js
*
*     @author     Juan Jose Gonzalez Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 - En este ejercicio se pretende saber en qué 
*     posición se encuentra la primera letra "a" dentro de una cadena
*     
*	   ------------------------------------------------------------------------------------------------------
*/
function busqueda(cadena,letra){
	var posicion=0;
	var repeat=false
		for (var i=0; i<cadena.length; i++){
				if (cadena.charAt(i)==letra  && repeat==false){
				 posicion=i+1; 
				 repeat=true
				}
		}
 return "La cadena "+cadena+" tiene en la posicion " + posicion + " la letra " +letra;
}