/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion busqueda / ejercicioPla3_1_8.js 
*
*     @author     Juan Jose Gonzalez Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 - En una cadena con letras deseamos detectar si hay algún número y en que posición se encuentra.
*     
*	   ------------------------------------------------------------------------------------------------------
*/
function busqueda(cadena){
	var repes=0
	var tabla=[]
	for (var k=0; k<cadena.length; k++){
		for (var i=0; i<10; i++){
		    if (cadena.charAt(k) == i) {
		   	tabla[repes]= " esta el numero "+cadena.charAt(k)+ " detectado en posicion " + (k+1);
		   	repes++;
		    }
		}  
	}
	return "En la cadena " + cadena+tabla;
}