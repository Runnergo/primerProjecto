/*ejercicio numero 5*/

function busqueda(cadena,suma,letra){
		for (var i=0; i<cadena.length; i++){
				if (cadena.charAt(i)==letra){
						return suma = i+1; 
				}
		}
}