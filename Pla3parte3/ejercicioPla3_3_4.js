/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion valores / ejercicioPla3_3_4.js 
*
*     @author     Juan Jose Gonzalez Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 -Dada una cadena del 0 al 9 que pondremos dentro de una función, cuenta los números más grandes 
*     que el valor ingresado por el usuario, y en el caso que el resultado sea mayor que la mitad de la 
*     cadena mas uno, devuelve el valor 1 si no 0
*     
*	   ------------------------------------------------------------------------------------------------------
*/
function valores(cadena,numero){
	var mayorMenor=0
	var lenCadena=cadena.length;
	var suma=0
	for (var i=0; i<lenCadena; i++){
		 if (parseInt(cadena.charAt(i))>parseInt(numero)){
			 suma++
		 }
	}
	
	if (suma==(lenCadena/2)+1){
		mayorMenor=null;
	    document.write("En la cadena "+ cadena + "<br>" );
		document.write("De " + lenCadena + " numeros hay "+ suma +" mayores de  "+ numero + "<br>");
		document.write("La cantidad de numeros mayores de "+numero+" es igual que la mitad de la cadena mas uno, por lo que se asigna el valor NULL");
	}else{
	       if (suma>(lenCadena/2)+1){
		    mayorMenor=1;
	        document.write("En la cadena "+ cadena + "<br>" );
		    document.write("De " + lenCadena + " numeros hay "+ suma +" mayores de  "+ numero + "<br>");
		    document.write("La cantidad de numeros mayores de "+numero+" es mayor que la mitad de la cadena mas uno, por lo que se asigna el valor 1");
            } else {
            mayorMenor=0;
		    document.write("En la cadena " + cadena + "<br> ");
		    document.write("De " + lenCadena + " numeros hay "+ suma +" mayores de  "+ numero + "<br>");
		    document.write("La cantidad de numeros mayores de "+numero+" es menor que la mitad de la cadena mas uno, por lo que se asigna el valor 0");
	        }
	}		
	return mayorMenor;
}