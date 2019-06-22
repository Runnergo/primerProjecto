/*ejercicio numero 1*/

function busqueda(cadena,letra){
	var suma=0;

	for (var i=0; i<cadena.length; i++){
		console.log(cadena.charAt(i));
		if (cadena.charAt(i)==letra){
			console.log(cadena.charAt(i));
			suma++; 
				}
		}
	
return "La cadena "+cadena+" tiene " + suma + " " +letra;
}