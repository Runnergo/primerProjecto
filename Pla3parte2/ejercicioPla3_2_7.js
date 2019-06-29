/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion busqueda / ejercicioPla3_2_7.js 
*
*     @author     Juan Jose Gonzalez Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 -Usando la matriz de ejercicio anterior, hay que indicar que numeros 
*     por encima de la diagonal, son mayores, menores o iguales a cero
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
    	var cont=1;
    	var contadorIgual=0;
    	var contadorMayor=0;
    	var contadorMenor=0;
    	document.write("<b>La matriz es la siguiente</b><br><br>");
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
    	document.write("<font color=#000000><br> Los numeros por encima de la diagonal son:</b><br><br>");
    	
        for (var k=0; k<numero; k++){
        	suma++        	
             for (var i=0; i<numero-suma; i++){
            	           	
              document.write(tabla[k][cont]);
             
         	 if ( tabla[k][cont]==0){
        		 contadorIgual++
        	 }
        	 if ( tabla[k][cont]>0){
        		 contadorMayor++
        	 }
        	 if ( tabla[k][cont]<0){
        		 contadorMenor++
        		 
        	 }
        	 cont++      
             }
            cont=suma+1
        	document.write("<br>");
          
        }
     return document.write("<b>Hay "+contadorMenor+" numeros menor de cero, "+contadorMayor+" mayor de cero y "+contadorIgual+" igual que cero</b>");
}  
