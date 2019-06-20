
function busqueda(numero){
		var tabla=[];
    	var suma=0;
    	var igualZero=0
		for (var k=0; k<numero; k++){
			tabla[k]=[];
    	  for (var i=0; i<numero; i++){
		    tabla[k][i]=(Math.floor(Math.random() * 10));
		    document.write(tabla[k][i]);
    	  }
	    
		 } 
	     for (k=0; k>numero; k++){   		  
   		  for (i=0; i>numero; i++){ 
   			  console.log(tabla[k][i]);
   			  if (tabla[k][i]!=0){    			    	  
   			     igualZero++;
   			  }
   			         	 
   		  }
	     }
     //		for (var k=0; k<numero; k++){
	//		suma = suma + tabla[k][k];
	//	    document.write("<br>"+tabla[k][k]);
 	//	 	 }
  return " la suma de la diagonal es " + igualZero ;
}  
