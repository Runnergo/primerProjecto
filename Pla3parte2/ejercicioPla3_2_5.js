
function busqueda(numero){
		var tabla=[];
    	var suma=0;  
    	var espaciado=0;
    	var colorLetra=0;
   	
    	      document.write("La tabla es: <br>");
	    	  for (var i=0; i<25; i++){
	    	      tabla[i]=(Math.floor(Math.random() * 10));
		      if (colorLetra==i) {
		    	  document.write("<b><font color=#ff0000>"+tabla[i]);
		    	  colorLetra=colorLetra+6
		      }else {

		    	  document.write("</b><font color=#000000>"+tabla[i]);
		 		      }
		    
	    	  }
	    	  
	    	  
	    	  document.write("<br></b><font color=#000000>La suma de la diagonal: ");
		      for (var k=0; k<5; k++){
		    	 suma=suma+tabla[espaciado]
		    	 document.write("<b>"+tabla[espaciado]+"</b>");
		    	 espaciado=espaciado+6
		      }	
	    	  document.write("<br> Es igual a <b>"+ suma);
       return "La suma de la diagonal es "+suma;		        
 }
 
