
function busqueda(cadena,letra){
	var j=0
	var tabla =[];
	for (var i=0; i<cadena.length; i++){
		console.log(tabla);
				if (cadena.charAt(i)==letra){
			tabla[j]=i+1;
			j++
			}
		}
	return "la letra "+letra+" esta en las posiciones "+tabla+" en la cadena "+cadena;
}