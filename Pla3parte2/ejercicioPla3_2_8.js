/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion busqueda / ejercicioPla3_2_8.js 
*
*     @author     Juan Jose Gonzalez Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 -Dada una matriz de tamaño a elegir por el usuario, hacer la media 
*     aritmética de cada fila e introducir los datos en un vector
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
		var media=[];
	   	var suma=0;
    	    document.write("La matriz es la siguiente</b><br><br>");
        	for (var k=0; k<numero; k++){
	          tabla[k]=[];
			  media[k]="";
			  for (var i=0; i<numero; i++){
    	        tabla[k][i]=(Math.floor(Math.random() * 10));
       	       }
        	 }
        	
                 //* Salida de datos*/
        	
		    for (k=0; k<numero; k++){
		   	   for (i=0; i<numero; i++){ 		   			
		   	     document.write(tabla[k][i]);
		   		 suma=suma+tabla[k][i];		   		
				}		   	
		     	media[k]=suma/numero;
		    	document.write(" -- la media es :"+media[k]+"<br>" );
		   	}
           
     return media;
}  
