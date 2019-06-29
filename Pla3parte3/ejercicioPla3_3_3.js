/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion mediaAritmetica / ejercicioPla3_3_3.js 
*
*     @author     Juan José González Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 -Calcula la media aritmética de una cadena de 1 a la n donde este es un parámetro de la función
*     
*	   ------------------------------------------------------------------------------------------------------
*/
function mediaAritmetica(numero){
	var media=0
	var suma=0
	for (var i=1; i<=numero; i++){
		 suma = suma+i
		 document.write(i);
		 if (i==numero){
			 document.write(" = ");
		 }else {
			 document.write(" + "); 
		 }
		}
	media=suma/numero
	document.write("( "+suma+" / "+numero+" ) = "+media+" es la media");
	
	return "la medias es "+media;
}