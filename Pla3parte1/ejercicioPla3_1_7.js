
function busqueda(cadena,numero){
	var j=0
	var tabla =[];
	for (var i=0; i<10; i++){
	    for (var k=0; k<cadena.length; k++){
		console.log(tabla);
				if (cadena.charAt(k)==i){
				j++;
			    tabla[i]=i+"-"+j;
			    }
		}
	j=0
	}
	return "Cadena "+cadena+" (numeros de 0 al 9 - cantidad de veces que se repite) " +tabla;
}