
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
	return "La letra <b><font color=#ff0000>"+letra+"</b><font color=#000000> esta en las posiciones "+tabla+" en la cadena "+cadena;
}