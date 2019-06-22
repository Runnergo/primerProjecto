
function busqueda(cadena){
	var repes=0
	var tabla=[]
	for (var k=0; k<cadena.length; k++){
		for (var i=0; i<10; i++){
		    if (cadena.charAt(k) == i) {
		   	tabla[repes]= " esta el numero "+cadena.charAt(k)+ " detectado en posicion " + (k+1);
		   	repes++;
		    }
		}  
	}
	return "En la cadena " + cadena+tabla;
}