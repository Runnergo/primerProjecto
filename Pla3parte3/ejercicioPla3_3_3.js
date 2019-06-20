
function valores(numero){
	var media
	var suma=0
	for (var i=1; i<=numero; i++){
		 suma = suma+i
		 document.write(i);
		 if (i==numero){
			 document.write(" = ");
		 }else {
			 document.write(" + "); 
		 }
		}
	media=suma/numero
	document.write("( "+suma+" / "+numero+" ) = "+media+" es la media");
	
	return media;
}