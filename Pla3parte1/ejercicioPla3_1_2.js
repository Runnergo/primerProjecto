/*ejercicio numero 2*/

function busqueda(cadena,suma,letra){
	console.log(cadena);
	console.log(cadena.length);
	for (var i=0; i<cadena.length; i++){
		console.log(cadena.charAt(i));
		if (cadena.charAt(i)==letra){
			console.log(cadena.charAt(i));
			suma++; 
				}
		}
return "la cadena asfgeysssadhffagdsh tiene "+suma+ " " +letra;
}