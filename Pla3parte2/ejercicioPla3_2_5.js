/**    -----------------------------------------------------------------------------------------------------
*	  @fileoverview  funcion busqueda / ejercicioPla3_2_5.js 
*
*     @author     Juan José González Pozo <juan.gonzalez.cifo@gmail.com> (centro la Violeta)
*       
*     @version   v1.0
*     
*     History
*     v1-0 -Este ejercicio es similar al anterior, pero en vez de usar 5 listas
*      usaremos una donde estén los 25 elementos del vector 5 por 5
*     
*	   ------------------------------------------------------------------------------------------------------
*/
function busqueda(numero){
		var tabla=[];
    	var suma=0;  
    	var espaciado=0;
    	var colorLetra=0;
   	
    	      document.write("La tabla es: <br>");
	    	  for (var i=0; i<25; i++){
	    	      tabla[i]=(Math.floor(Math.random() * 10));
		      if (colorLetra==i) {
		    	  document.write("<b><font color=#ff0000>"+tabla[i]);
		    	  colorLetra=colorLetra+6
		      }else {

		    	  document.write("</b><font color=#000000>"+tabla[i]);
		 		      }
		    
	    	  }
	    	  
	    	  
	    	  document.write("<br></b><font color=#000000>La suma de la diagonal: ");
		      for (var k=0; k<5; k++){
		    	 suma=suma+tabla[espaciado]
		    	 document.write("<b>"+tabla[espaciado]+"</b>");
		    	 espaciado=espaciado+6
		      }	
	    	  document.write("<br> Es igual a <b>"+ suma);
       return "La suma de la diagonal es "+suma;		        
 }
 
