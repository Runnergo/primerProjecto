/*ejercicio numero 1*/

function busqueda(cadena,suma){
	console.log(cadena);
	console.log(cadena.length);
	for (var i=0; i<cadena.length; i++){
		console.log(cadena.charAt(i));
		if (cadena.charAt(i)=="a"){
			console.log(cadena.charAt(i));
			suma++; 
				}
		}
return "La cadena asfgeysadhffagdsh tiene " + suma + " a";
}