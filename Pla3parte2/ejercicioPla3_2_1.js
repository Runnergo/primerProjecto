/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion busqueda / ejercicioPla3_2_1.js 
*
*     @author     Juan Jose Gonzalez Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 - De una cadena fija cuenta los números mayores que el introducido por el usuario
*     
*	   ------------------------------------------------------------------------------------------------------
*/
function busqueda(cadena,numero){
	var suma=0;
	var cantidadNumeros=0
    	for (var i=0; i<cadena.length; i++){
		    if (cadena.charAt(i) > numero) {
		   	   	var letra =parseInt(cadena.charAt(i)); 	
		        suma=suma+letra;
		        cantidadNumeros++;
		    }
		   
		 }  	
return "Hay "+cantidadNumeros+"  numeros mayores que " + numero +" en la cadena "+cadena+" y su suma es "+suma;
}