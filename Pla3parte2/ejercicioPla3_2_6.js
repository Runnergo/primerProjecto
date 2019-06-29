/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion busqueda / ejercicioPla3_2_6.js 
*
*     @author     Juan Jose Gonzalez Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 -Este ejercicio tendrá la misma funcionalidad que el anterior, con la diferencia de que el usuario
*      podrá determinar de cuanto quiere que sea el vector y que en vez de usar varias tablas usaremos una matriz
*     
*	   ------------------------------------------------------------------------------------------------------
*/
function busqueda(numero){
	if (numero>100){ 
		return" Numero demasiado alto ha de estar entre 0 y 100";
	}
	if ((numero/1)!=numero){ 
		return" La cadena han de ser numeros no letras ni simbolos";
	}
		var tabla=[];
    	var suma=0;
		for (var k=0; k<numero; k++){
			tabla[k]=[];
    	  for (var i=0; i<numero; i++){
    		  if (k==i){
    			  document.write("<font color=#ff0000><b>");
    			  }else{
    		      document.write("<font color=#000000></b>");
    	          }
		    tabla[k][i]=(Math.floor(Math.random() * 10));
		      document.write(tabla[k][i]);      	  
    
 		  }
    	  document.write("<br>");
		 } 
     		for (var k=0; k<numero; k++){
			suma = suma + tabla[k][k];
		    document.write("<br>"+tabla[k][k]);
 		 	 }
  return " La suma de la diagonal es " + suma ;
}  
