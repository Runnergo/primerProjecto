
function busqueda(cadena){
	var contA=0
	var contB=0
	var tabla =[];
    	for (var i=0; i<cadena.length; i++){
		    if (cadena.charAt(i) =="A") {
		        contA++;
		    }
		    if (cadena.charAt(i) =="B") {
		        contB++;
		    }
		 }
    	tabla[0]=contA; tabla[1]=contB
	return "En la cadena " + cadena +" hay "+tabla[0]+" A y "+tabla[1]+" B";
}