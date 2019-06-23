# PRIMER PROYECTO

INTRODUCCION
------------

Este primer proyecto en JavaScript está basado en los ejercicios realizados en scratch de la PLA·3 primera y segunda, parte adaptando el código al entorno de JavaScript.

Se han añadido también los ejercicios de iniciales realizado en este lenguaje, aunque no eran requeridos para este propósito, con el fin de tenerlos agrupados en un único código.


INICIO DE VISUALIZACION DEL HTML:

Para lograr un mejor Clean Code se ha creado un archivo llamado HomeMenu.html en él se encuentran una serie de botones que dan acceso a los distintos ejercicios.
Para volver al menú de ejercicios, hay que usar el acceso de página anterior de nuestro explorador.

En esta página definimos el aspecto visual utilizando estilos para el cambio de color de fondo, grosor marco, al igual que tipo de letra, tamaño y color de los distintos botones y comentarios incrustados. 



DESCRIPCION DE LOS EJERCICIOS PLA3 PRIMERA PARTE
-------------------------------------------------


-. EJERCICIO 1

 Cuenta la cantidad de A´s que hay en una cadena de texto.

PASOS:
- Desde el HTML se asigna una cadena de letras a la función **busqueda** y una letra a buscar. 
- Dentro de esta función iniciamos una variable donde se guardará el resultado de nuestra suma
- Se crea un bucle que inicia en 0 hasta que sea menor que el valor de la longitud de la cadena, con la instrucción **cadena.length** tendremos esa longitud.
- Dentro de este bucle compararemos letra a letra en toda la cadena, si es igual al valor que le asignamos en segundo lugar a la función desde el HTML, en este caso la "a". 
- Si el resultado es cierto ira acumulándose la variable **suma** de uno en uno
- Por último retornara el valor de suma con comentario a un **alert(resultado);**. alojado en la variable resultado

___

-. EJERCICIO 2

 Cuenta la cantidad de veces que se repite una letra, que el usuario puede escoger, en una cadena de texto.

PASOS:
Este ejercicio es igual que el anterior, pero nos da la opción al usuario de decidir que letra se quiere buscar en la cadena.
Para ello se define una variable en el HTML llamada **letra** donde estará alojada la opción del usuario mediante el método siguiente:


                ` <script>var cadena = prompt("inserta cadena")</script>
                  <script>var letra = prompt("¿Que letras quieres buscar?")</script>
                  <script>var resultado = busqueda(cadena,letra);</script>`          
___


-.EJERCICIO 3

 Cuenta la cantidad de veces que se repite una letra done el usuario puede escoger la letra y la cadena de texto.

PASOS:
En este caso también está basado en el ejercicio anterior, pero como valor añadido le hemos dado la opción al usuario de inserta la cadena de caracteres, y como en el caso anterior, también se a añadido otro **promt** para insertar la cadena y alojarla en la variable **cadena**.

___


-. EJERCICIO 4

 En este ejercicio se pretende saber en qué posición se encuentra la primera letra "a" dentro de una cadena.

PASOS:
- El usuario tiene la opción de introducir la cadena de texto que estará alojada en la variable **cadena**. Esta variable se comparte con la función **busqueda**, donde también esta alojada la letra a buscar.
- En el JS iniciamos dos variables, una para alojar a la posición resultante y la otra será una variable de estado que la iniciamos con **false** y que la comentaremos posteriormente.
- Realizaremos un bucle para que a lo largo de la cadena nos encuentre la primera letra "a". Por lo que compararemos letra a letra si es igual a "a" además de tener que cumplirse que la variable **repeat** sea **false**.
- En el caso que se cumpla la condición pasaremos el valor de i más uno( se le suma uno por el hecho de que el bucle empieza por 0) a la variable posición, y estado de **repeat** cambiara a **true**.
- La razón de añadir la variable **repeat** es para determinar que ha encontrado la primera letra "a", ya que, si hubieran más de una, el valor de posición cambiaria a la siguiente localización, de este modo el **IF** solo funcionara la primera vez que encuentre la "a".
- Por último retornaremos los resultado por medio de un **alert**.

___

-. EJERCICIO 5

 En que posición se encuentra la primera letra "a" dentro de una cadena, con opción a que el usuario inserte la cadena.

PASOS:
- Este ejercicio es igual que el anterior, pero el usuario puede decidir qué letra buscar dentro de la cadena.


                 `<script>var letra = prompt("¿Que letras quieres buscar?")</script>`

- Estos valores se añadirán a la función para poder tratarlos en nuestro JS

                 `function busqueda(cadena,letra){`

___

-. EJERCICIO 6
 

 Aquí tratamos de saber en qué posiciones se repite una letra de una cadena fija y guardarlas en una tabla.

PASOS:
- El funcionamiento es igual que lo visto anteriormente, con la diferencia de que se inicializa una tabla y en ella se va guardando las posiciones a medida que se va escaneando la letra
- El retorno del resultado lo hemos variado, se ha resaltado en rojo la letra que se está buscando además de en negrita. Pero no solo eso, en vez de mostrar el resultado en un **alert**, se ha decidido usar el método **document.getElementById()**. Este devuelve un valor que tiene el atributo **ID** y lo muestra en el html directamente en vez de un mensaje.

___


-. EJERCICIO 7

 Dada una cadena de números que inserta el usuario, contar la cantidad de veces que se repiten los numero e ingresarlos en una tabla.

PASOS:
- En primer lugar, se le pide al usuario que inserte la cadena numérica que la compartiremos con la función.
- Inicializamos una tabla y una variable **contador** que servirá para reiniciar a cero las sumas de números repetidos cuando el bucle termine de comparar los numero del 0 al 9 progresivamente.
- Le damos a todos los datos de la tabla el valor **"no esta"**, una vez ya haya hecho la comparación este dato cambiara al correcto. Esto lo realizo para que la tabla no tenga valores en blanco si el número que revisa no está en la cadena.
- Con el primer bucle nos servirá para comparar los números del 0 al 9 y con el segundo correrá letra a letra por nuestra cadena según su longitud.
- Dentro del **IF** iremos añadiendo el valor de la posición más el de la suma del contador.
- Retornaremos al final los datos la tabla hacia un **document.getElementById()**.

___

-. EJERCICIO 8

 En una cadena con letras deseamos detectar si hay algún número y en que posición se encuentra.

PASOS: 
- El usuario inserta una cadena de texto con algún numero
- El primer bucle recorre las posiciones de toda la cadena
- El segundo bucle sirve para que **IF** compare los valores del 0 al 9 para que posteriormente los añada a una tabla
- Hay un detalle para que la tabla solo se rellene con los números que están repetidos, y es a través de un contador llamado **repes** que solo se acumula cuando se cumpla esta condición.
- Por último, devuelve los datos de la función con la cadena y el resultado.

___


DESCRIPCCION DE LOS EJERCICIOS PLA3 SEGUNDA PARTE
-------------------------------------------------


- EJERCICIO 1

 De una cadena fija cuenta los números mayores que el introducido por el usuario

PASOS: 
- El usuario inserta el valor alojado en la variable **numero** y añadida a la función **busqueda**
- Declaramos una variable que contendrá nuestra **suma** y otra que tendrá la instrucción para cambiar el valor alfanumérico a numérico para que se pueda sumar. 
- En un bucle hasta la longitud de la cadena se usará un **IF** para ver si el número es mayor
- Como mencionamos antes al ser un dato alfanumérico las suma de este daría como resultado el añadir un numero tras otro sin realizar la suma deseada, de ahí la conversión
- Retornaremos el resultado en un **alert** donde reportamos la cantidad de números que son mayores, el numero buscado, la cadena de números y la suma de los números mayores que el seleccionado.

___

-. EJERCICIO 2

 En una cadena donde hay A´s y B´s sumar cuantas hay de cada y poner las en una tabla

PASOS: 
- Añadimos el valor de la **cadena** a la función **busqueda**
- Declaramos dos variables una para las A´s y otra para las B´s, además iniciar la tabla donde se alojarán los resultados.
- Creamos un bucle de tantos ciclos como letras en la cadena y dentro añadimos dos **IF**, uno para comparar la igualdad con la letra A y otro con la letra B. En cada uno cuando se cumpla aumentará su respectivo contador.
- Al finalizar los bucles les asignamos los valores de los contadores a las posiciones de la tabla.
- Retornaremos el valor de la tabla en el HTML.

___

-.EJERCICIO 3


 Añadir en cinco tablas con un vector de 5x5 donde nos de la suma de su diagonal

PASOS:
- inicializamos una tabla para para alojar nuestra cadena, una variable **suma** para guardar la suma de los elementos, una variable **diagonal** para poder visualizar fácilmente los números situados en la diagonal de las listas y por último la variable **contSuma** que será un contador que nos ayudará a localizar los números de la diagonal
- Entre bucles asignaremos un valor vacío a la tabla
- Posteriormente llenaremos cada una de las 5 tablas con 5 elementos creados aleatoriamente (números del 0 al 9) 
 

                 ` tabla[k]=tabla[k]+(Math.floor(Math.random() * 10));`

- La suma de esta línea se realiza con números alfanuméricos, es decir, añadirá a la tabla un elemento tras otro
- Con la siguiente instrucción mostraremos en pantalla la tabla creada con los cinco elementos, añadiendo un salto de página para mostrar la siguiente línea 

                 `document.write(tabla[k]+"<br>");`
- Con la variable **diagonal** mostraremos de que números se compone la diagonal y en la variable **suma** el resultado de la suma entre ellos.
- Al ser los numero alfanuméricos, si queremos hacer la suma los tenemos que convertir para poder hacer el cálculo. Esto lo lograremos con el método **parseInt();**, quedando de esta forma.

 
                 `suma =suma + parseInt(tabla[k].charAt(contSuma));`

- Por último retornaremos la función **busqueda** con los valores de la **suma** y la **diagonal**.

___

-. EJERCICIO (4-5)

 Este ejercicio es similar al anterior, pero en vez de usar 5 listas usaremos una donde estén los 25 elementos del vector 5 por 5.

PASOS:
- En primer lugar, crearemos nuestra tabla y la llenaremos con un bucle hasta de 25 ciclos para ir acumulando uno tras otro los números que saldrán aleatoriamente como hemos visto en ejercicios anteriores.
- Seguidamente se mostrará la cadena completa, pero para que sea más fácil visualizarla los números de la diagonal estarán con letra roja. Para eso son los **if´s**, cuando coincide con el numero de la diagonal, este se colorea en caso contrario pasa a ser negro. 
- Para determinar el número de la cadena que pertenece a la diagonal, se ha creado un contador que va de seis en seis.
-Para finalizar se crea otro bucle para realizar la suma aritmética con la ayuda de otro contador llamado **espaciado** que hará saltos de seis en seis y se mostrara los números de la diagonal y su suma que serán retornados a la función.

___

-. EJERCICIO 6

 Este ejercicio tendrá la misma funcionalidad que el anterior, con la diferencia de que el usuario podrá determinar de cuanto quiere que sea el vector y que en vez de usar varias tablas usaremos una matriz.

PASOS:
- El usuario tiene que primero ingresar de cuanto quiere la matriz de la misma cantidad de filas que columnas, (por lo que solo tendrá que introducir un solo número). Como ya hemos visto anteriormente lo haremos con un método **prompt("");**
- Esta vez vamos a filtrar los datos del usuario para delimitar su contenido, por eso haremos dos pasos adicionales
- Queremos que el numero este comprendido entre 0 y 100 por ello crearemos un **if** para verificar que sea así. En el caso que sea mayor dará un mensaje de error y retorna la función.


                  `if (numero>100){ 
		               return" Numero demasiado alto ha de estar entre 0 y 100";
	                }`
- Pero además se ha añadido un filtro más. ¿Y si el valor ingresado por el usuario no es un numero si no una letra o un símbolo?. Para ello hemos creado otro **if** que divide el valor ingresado por uno, si es un numero nos tendría que devolver el mismo valor, si no lo es esta condición no se cumple.

                   Es decir     eje. 50 / 1 = 50; A / 1 = ??

   La comparación quedaría así:    
   
                 `	if ((numero/1)!=numero){ 
		             return" La cadena han de ser numeros no letras ni simbolos";
	               } 
- Para iniciar la matriz se hará como una tabla normal, pero a la hora de ingresar datos hay que dar un valor inicial

                 `var tabla=[];                 
                  for (var k=0; k<longitudColumnas; k++){                  
			             tabla[k]=[];			             
			           for (var i=0; i<longitudFilas; i++){			            
			             tabla[k][i]= dato a introducir;			         
			             {`
			             
- Llenaremos nuestra tabla con números aleatorio y marcaremos en rojo la diagonal como henos visto en ejercicios anteriores.
- Para extraer los datos se ha creado otro bucle que se mueve por la diagonal (usando la misma variable para columnas y filas) y mostrando su resultado-
- por último, retornaremos el valor de la suma.

___

-. EJERCICIO 7

Usando la matriz de ejercicio anterior, hay que indicar que números por encima de la diagonal, son mayore, menores o iguales a cero

PASOS:
- La parte para insertar los datos será igual que el ejercicio anterior.
- Se crearán tres variables para alojar la suma de los números mayores, menores e iguales a cero en las variables 
 

                   `var contadorIgual=0;
    	            var contadorMayor=0;
    	            var contadorMenor=0;`   

- La lógica se encuentra a la hora de extraer los datos. Se harán tres **if´s**, uno para el valor mayor de cero, otro para el meno y otro para el igual, cada uno con su respectivo contador.
- Inicialmente se ha creado una variable **cont** con el valor de uno y una con el nombre de **suma** con valor 0.
- Se inicia un bucle hasta el número total de columnas e iniciamos el contador **suma**.
- Abrimos el siguiente bucle que ira hasta el número de filas, pero le iremos restando el valor de suma cada vez que complete su ciclo. Con esto conseguimos igualar la posición del número de fila que me interesa, con la duración del bucle.
- Con el contador **cont** determinaremos la posición del número que queremos sumar. 
- Por último, retornaremos el valor de las tres variables.

___

-. EJERCICIO 8

Dada una matriz de tamaño a elegir por el usuario, hacer la media aritmética de cada fila e introducir los datos en un vector

PASOS:
- La inserción de datos en la matriz es igual que en el ejercicio anterior
- Se inicializa además una tabla llamada **media** donde alojaremos nuestro calculo final.
- El primer bucle de salida de datos se usará para las columnas y el segundo para las filas.
- En este último, iremos sumando en la variable **suma** los valores de la fila. Una vez finalice, antes de que se inicie el segundo, guardara en la tabla el valor de la suma de esa fila dividido por el número de datos (la media).
- En último lugar retornaremos el valor de la tabla **media**.

___

DESCRIPCCION DE LOS EJERCICIOS INICIALES EN JAVASCRIPT
------------------------------------------------------


-. EJERCICIO 1

 Crea una función para cada operador lógico (suma, resta, multiplicación y división) con 3 y 15.
- En el código html definimos la variable resultado donde estará nuestra función, a esta le añadiremos los dos valores compartidos.
- En nuestro archivo JS declaramos una variable por operador usado donde directamente realizara la operación. Estos valores los extraemos de la función que hemos llamado **valores** y les asignamos los nombres de **numUno** y **numDos**
- Solo nos queda imprimir en pantalla el resultado y retornarlo.

___

-. EJERCICIO 2

  Suma los números entre si de una cadena enviada con la función **SumaDiezNumeros**
  
PASOS:  
- En la variable **resultado** estará nuestra función **SumaDiezNumeros**, en ella pondremos la cadena de números.
- Asignaremos a la variable **suma** el valor numérico (convertido de alfanumérico a numérico por el método **parseInt()**) del primer número de la cadena. Si el valor de la cadena se cambiase, esta variable siempre tendría el contenido del primer número.
- iniciamos un bucle que va desde 1 (ya que en **suma** sabemos que hay, necesitamos el numero siguiente para sumarlo) hasta la cantidad de números de la cadena (de igual modo que en el caso anterior, si la cadena aumenta de números no nos afectara en el funcionamiento).
- Se irán sumando los números una a uno al mismo tiempo que los convertimos en numéricos
- Se ha añadido una visualización más clara para ver los resultados.
- Retornaremos el valor del contenido suma a la variable resultado de nuestra función

___

-. EJERCICIO 3

  Calcula la media aritmética de una cadena de 1 a la **n** donde este es un parámetro de la función
 
PASOS:
- El usuario tendrá la opción de ingresar hasta que numero quiere hacer la media donde será añadido a la función
- Haremos un bucle de tantos ciclos como numero tenga la cadena 
- En la variable suma guardaremos la suma de todos los números
- Se ha añadido un **if else** para que en pantalla nos salga el signo igual o el de +, para una mejor presentación.
-Por último, el valor de la suma que ya estará fuera del bucle, será dividido por la cantidad de números
- El valor será retornado en la variable media.

___


-. EJERCICIO 4


   Dada una cadena del 0 al 9 que pondremos dentro de una función, cuenta los números más grandes que el valor ingresado por el usuario, y en el caso que el resultado sea mayor que la mitad de la cadena mas uno, devuelve el valor 1 si no 0

PASOS:
- Le pediremos al usuario los valores de la cadena y numero a comparar en ella añadiendo los datos a la función **valores**
- Dentro de un bucle de tantos ciclos como caracteres tiene la cadena, comparamos con **if** si el valor numérico del carácter es mayor al siguiente numero de la cadena, que los sume.
- Luego, cuando finalice el bucle, necesitamos ver si el valor de **suma** es mayor o menor la mitad de la cadena mas uno.
Operadores:


                `(suma>(lenCadena/2)+1)`
                `(suma<(lenCadena/2)+1)`
                
- Hemos añadido una comparación inicial para evitar un resultado de igualdad (en este caso dará un valor de **null**), que en el caso de que no se cumpla, se realizaran las otras comparaciones.

Operador:

       
                `(suma==(lenCadena/2)+1)
                
                 //* ejemplo: 1112333333 3x6=18/2=9+1=10= longitud de la cadena`
 
- Por último, retornamos el valor en la variable de estado mayor Menor

___

-. EJERCICIO 5

   Dada una cadena con A´s B´s C´s... dentro de una función, devuelve la cantidad de letras repetidas con el siguiente formato A=1, B=2, C=2,...

PASOS:
- La entra por usuario de la cadena será insertada en la función **abcd**
- Creamos principalmente una variable con todas las letras de abecedario, una tabla y una que contenga el valor de la suma
- En un bucle hasta longitud de la cadena, daremos un valor a la tabla de "", para no dejar posiciones sin valor
- En el bucle indexado compararemos si el valor de la letra del abecedario está en la cadena en caso de ser cierto suma el valor y lo asigna a la tabla.
- El valor de la suma se reiniciar a cero, para comparar la siguiente letra del abecedario.

___


-.EJERCICIO 6

 En un mismo mensaje retorna los valores del ejercicio 3 y 5
 Con este ejercicio se pretende unificar dos funciones llamadas por un mismo código
 
 PASOS:
- En un mismo JS se ha colocado las funciones de cada ejercicio
- En el HTML se pide los valores de la cadena de A´s, B´s... y el numero para hacer la media, en las variables **cadenaABC** y **numer** respectivamente.
- estas se añaden a las funcione **abdc** y **mediaAritmetica** que retornarán los datos que serán sumados con las variables **resultado1** y **resultado2**

___




Ejercicios realizados por Juan José González Pozo que recive formacion en el centro La Violeta 

Con el apoyo del Pla De Qualificació en Tecnologia Mòbil **PQTM** 

Barcelona 23 de Junio 2019
____




  







                      






















































