
function busqueda(cadena,numero){
	var j=0
    	for (var i=0; i<cadena.length; i++){
		    if (cadena.charAt(i) > numero) {
		    	var letra =parseInt(cadena.charAt(i)); 	
		        j=j+letra;
		    }
		 }  
	return "La suma de los numeros mayores que " + numero +" en la cadena "+cadena+" es "+j;
}