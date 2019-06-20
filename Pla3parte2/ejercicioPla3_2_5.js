
function busqueda(numero){
		var tabla=[];
    	var suma=0;  
    	var j=0
 //*   	      llenar tabla con numeros aleatorios            */
    	
    	      document.write("La tabla es: <br>");
	    	  for (var i=0; i<25; i++){
		      tabla[i]=(Math.floor(Math.random() * 10));
		      document.write(tabla[i]);
	    	  }
	    	  document.write("<br>");
	    	  
	    	  document.write("La suma de la diagonal: ")
		      for (var k=0; k<5; k++){
		    	 
		    	 suma=suma+tabla[j]
		    	 document.write(tabla[j]);
		    	 j=j+6
		      }	
	    	  document.write("<br> Es igual a "+ suma);
       return "La suma de la diagonal es "+suma;		        
 }
 
