function busqueda(numero){
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
    	document.write("<font color=#000000><br> Los numneros por encima de la diagonal son:</b><br><br>");
    	
        for (var k=0; k<numero; k++){
        	suma++        	
             for (var i=0; i<numero-suma; i++){
            	           	
              document.write(tabla[k][cont]);
              cont++
         	 if ( tabla[k][cont]==0){
        		 contadorIgual++
        	 }
        	 if ( tabla[k][cont]>0){
        		 contadorMayor++
        	 }
        	 if ( tabla[k][cont]<0){
        		 contadorMenor++
        		 
        	 }
        	        
             }
            cont=suma+1
        	document.write("<br>");
          
        }
     return document.write("<b>Hay "+contadorMenor+" numeros menor de cero, "+contadorMayor+" mayor de cero y "+contadorIgual+" igual que cero</b>");
}  
