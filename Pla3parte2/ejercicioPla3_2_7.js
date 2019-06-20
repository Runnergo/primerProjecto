
function busqueda(numero){
	    var tabla=[];
	//	var cont=1;
	//	var mayorZero=0;
	//	var MenorZero=0;
	//	var igualZero=0;
    	var suma=0;
     	for (var k=0; k<numero ; k++ ){
     		tabla[k]=[];
     	  for (var i=0; i<numero; i++){ 
     	    tabla[k][i]=(Math.floor(Math.random() * 10));
		       //document.write(tabla[k][i]);    	    
		  }
       	  //document.write("<br>");
	    }  
    	return suma;
}
/*	
         for (k=0; k>numero; k++){
    		  
    		  for (i=0; i>numero; i++){
    		    	  
    			  if (tabla[k][cont]==0){    			    	  
    			     igualZero++;
    			   
    			  }  
                      
    			  if (tabla[k][cont]>0){    			    	  
    			     mayorZero++;   			            			  
    		      }
    			  
    			  if (tabla[k][cont]<0){			    	  
     			     menorZero++;    			            			  
     		      }
    	      }
		        
		 }
         document.write("Hay "+igualZero+" numeros iguales a 0");
         document.write("Hay "+mayorlZero+" numeros mayores a 0");
         document.write("Hay "+menorlZero+" numeros menores a 0");
    
     
		 } 
   		for (var k=0; k<numero; k++){
		suma = suma + tabla[k][k];
	    document.write("<br>"+tabla[k][k]);
		 	

