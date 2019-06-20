
function valores(cadena){
	var abc="abcdefghijklmnñopqrstuvwyz"
	var tabla=[];
	var lenCadena=cadena.length;
    var suma=0
	document.write(cadena+"<br>");
	
	for (var j=0; j<abc.length; j++){  
		tabla[j]=""
		
		   for (var i=0; i<lenCadena; i++){ 
			
                 if (abc.charAt(j)==cadena.charAt(i) ) {
                 suma++;
                 tabla[j]=cadena.charAt(i)+" = "+ suma+" ";
               
                 }
                 
	      }
		   document.write(tabla[j]);
		   console.log(tabla[j]);	   
		  suma=0
	}
		
    return ; 
}