/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion abcde / ejercicioPla3_3_5.js 
*
*     @author     Juan José González Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 -Dada una cadena con A´s B´s C´s... dentro de una función, devuelve la cantidad de letras
*      repetidas con el siguiente formato A=1, B=2, C=2,...
*     
*	   ------------------------------------------------------------------------------------------------------
*/
function abcde(cadena){
	var abc="abcdefghijklmnñopqrstuvwyz"
	var tabla=[];
	var lenCadena=cadena.length;
    var suma=0
	document.write(" La cadena "+cadena+" tiene<br>");
	for (var j=0; j<abc.length; j++){  
		tabla[j]=""
		
		   for (var i=0; i<lenCadena; i++){ 
			
                 if (abc.charAt(j)==cadena.charAt(i) ) {
                 suma++;
                 tabla[j]=cadena.charAt(i)+" = "+ suma+" ";
               
                 }
                 
	      }
		   document.write(tabla[j]);	   
		  suma=0
	}
		
    return tabla; 
}