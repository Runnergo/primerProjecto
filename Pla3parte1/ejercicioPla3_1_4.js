
function busqueda(cadena,letra){
	var posicion=0;
	var repeat=false
		for (var i=0; i<cadena.length; i++){
				if (cadena.charAt(i)==letra  && repeat==false){
				 posicion=i+1; 
				 repeat=true
				}
		}
 return "La cadena "+cadena+" tiene en la posicion " + posicion + " la letra " +letra;
}