
function busqueda(){
		var tabla=[];
    	var suma=0;
		for (var k=0; k<5; k++){
			tabla[k]=[];
    	  for (var i=0; i<5; i++){
		    tabla[k][i]=(Math.floor(Math.random() * 10));
		    console.log(tabla[k][i]);
		        if (i==0){
		    	document.write("<br>"+tabla[k][i]);	
	            }else {
		    	document.write(tabla[k][i]);
		        }		   
		  }
		 } 
     		for (var k=0; k<5; k++){
			suma = suma + tabla[k][k];
		    document.write("<br>"+tabla[k][k]);
 		 	 }
  return " la suma de la diagonal es " + suma ;
}  
