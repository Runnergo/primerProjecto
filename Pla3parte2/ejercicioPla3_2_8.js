function busqueda(numero){
		var tabla=[];
		var media=[];
	   	var suma=0;
    	var cont=1;
    	var contadorIgual=0;
    	var contadorMayor=0;
    	var contadorMenor=0;
    	document.write("La matriz es la siguiente</b><br><br>");
        	for (var k=0; k<numero; k++){
	        tabla[k]=[];
			media[k]="";
			
    	       for (var i=0; i<numero; i++){
    	       tabla[k][i]=(Math.floor(Math.random() * 10));
          		
    	       }
        	 }
    	      
    	     
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
