
function busqueda(cadena){
	var j=0
	var tabla=[]
	for (var k=0; k<cadena.length; k++){
		for (var i=0; i<10; i++){
		    if (cadena.charAt(k) == i) {
		   	tabla[j]= " esta el numero "+cadena.charAt(k)+ " detectado en posicion " + (k+1);
		   	j++;
		    }
		}  
	}
	return "En la cadena " + cadena+tabla;
}