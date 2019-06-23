
function abcde(cadenaABC){
	var abc="abcdefghijklmnñopqrstuvwyz"
	var tabla=[];
	var lenCadena=cadenaABC.length;
    var suma=0
    var totalRes=""
//	document.write(" La cadena "+cadenaABC+" tiene<br>");
	for (var j=0; j<abc.length; j++){  
		tabla[j]=""
		
		   for (var i=0; i<lenCadena; i++){ 
			
                 if (abc.charAt(j)==cadenaABC.charAt(i) ) {
                 suma++;
                 tabla[j]=cadenaABC.charAt(i)+" = "+ suma+" ";
               
                 }
                 
	      }
		 totalRes=totalRes+tabla[j];
		   
		  suma=0
	}
	   
    return "<br>La cadena "+cadenaABC+" tiene:" +totalRes ;
}
function mediaAritmetica(numero){
	var media=0
	var sumaNum=0
	for (var i=1; i<=numero; i++){
		 sumaNum = sumaNum+i
		
		}
	media=sumaNum/numero
  

	return "<br>( "+sumaNum+" / "+numero+" ) = "+media+" es la media";
}