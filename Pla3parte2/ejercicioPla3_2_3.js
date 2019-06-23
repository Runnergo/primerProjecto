
function busqueda(){
		var tabla=[];
		var suma=0
    	var diagonal="";
    	var  contSuma="";
		for (var k=0; k<5; k++){
		  tabla[k]="";	
		  
    	    for (var i=0; i<5; i++){    		    			 
		    tabla[k]=tabla[k]+(Math.floor(Math.random() * 10));
 		  }
    	
    	  document.write(tabla[k]+"<br>");    	
   		  diagonal = diagonal +tabla[k].charAt(contSuma);
   		  suma =suma + parseInt(tabla[k].charAt(contSuma));
       	  contSuma++
	   } 

  return " La suma de la diagonal " + diagonal +" es igual a "+ suma ;
}  
