
function sumaDiezNumeros(numeros){
	var suma=parseInt(numeros.charAt(i));
	document.write("De los numeros "+ numeros+"<br>"); 
	for (var i=1; i<numeros.length; i++){
		document.write("<br>"+ suma+" + " + numeros.charAt(i) +" = " );
		 suma =suma + parseInt(numeros.charAt(i));
			 document.write(suma);
		}
	document.write("<br> El total es: "+suma);
	return	suma;
}