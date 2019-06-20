
function valores(numeros){
	var suma=parseInt(numeros.charAt(i));
	document.write("De los numeros "+ numeros+"<br>"); 
	for (var i=0; i<10; i++){
		document.write("<br>"+ suma+" + " + numeros.charAt(i+1) +" = " );
		 suma =suma + parseInt(numeros.charAt(i+1));
		 document.write(suma);
		}
	document.write("<br> El total es: "+suma);
	return	suma;
}