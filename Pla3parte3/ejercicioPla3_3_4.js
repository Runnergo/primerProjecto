
function valores(cadena,numero){
	var MayorMenor=0
	var lenCadena=cadena.length;
	var suma=0
	for (var i=0; i<lenCadena; i++){
		 if (parseInt(cadena.charAt(i))>parseInt(numero)){
			 suma++
		 }
	}
	
	if (suma==(lenCadena/2)+1){
		MayorMenor=null;
	    document.write("En la cadena "+ cadena + "<br>" );
		document.write("De " + lenCadena + " numeros hay "+ suma +" mayores de  "+ numero + "<br>");
		document.write("La cantidad de numeros mayores de "+numero+" es igual que la mitad de la cadena mas uno, por lo que se asigna el valor NULL");
	}else{
	       if (suma>(lenCadena/2)+1){
		    MayorMenor=1;
	        document.write("En la cadena "+ cadena + "<br>" );
		    document.write("De " + lenCadena + " numeros hay "+ suma +" mayores de  "+ numero + "<br>");
		    document.write("La cantidad de numeros mayores de "+numero+" es mayor que la mitad de la cadena mas uno, por lo que se asigna el valor 1");
            } else {
            MayorMenor=0;
		    document.write("En la cadena " + cadena + "<br> ");
		    document.write("De " + lenCadena + " numeros hay "+ suma +" mayores de  "+ numero + "<br>");
		    document.write("La cantidad de numeros mayores de "+numero+" es menor que la mitad de la cadena mas uno, por lo que se asigna el valor 0");
	        }
	}		
	return MayorMenor;
}