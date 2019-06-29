/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion busqueda / ejercicioPla3_1_3.js 
*
*     @author     Juan José González Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 - Cuenta la cantidad de veces que se repite una 
*     letra done el usuario puede escoger la letra y la cadena de texto.
*      
*     
*	   ------------------------------------------------------------------------------------------------------
*/
function busqueda(cadena,letra){
	var suma=0;
	
	for (var i=0; i<cadena.length; i++){
		console.log(cadena.charAt(i));
		if (cadena.charAt(i)==letra){
			console.log(cadena.charAt(i));
			suma++; 
				}
		}
return "La cadena "+cadena+" tiene " + suma + " " +letra;
}