# PRIMER PROYECTO

INTRODUCCION
------------

Este primer proyecto en JavaScript est� basado en los ejercicios realizados en scratch de la PLA�3 primera y segunda, parte adaptando el c�digo al entorno de JavaScript.

Se han a�adido tambi�n los ejercicios de iniciales realizado en este lenguaje, aunque no eran requeridos para este prop�sito, con el fin de tenerlos agrupados en un �nico c�digo.


INICIO DE VISUALIZACION DEL HTML:

Para lograr un mejor Clean Code se ha creado un archivo llamado HomeMenu.html en �l se encuentran una serie de botones que dan acceso a los distintos ejercicios.
Para volver al men� de ejercicios, hay que usar el acceso de p�gina anterior de nuestro explorador.

En esta p�gina definimos el aspecto visual utilizando estilos para el cambio de color de fondo, grosor marco, al igual que tipo de letra, tama�o y color de los distintos botones y comentarios incrustados. 



DESCRIPCION DE LOS EJERCICIOS PLA3 PRIMERA PARTE
-------------------------------------------------


-. EJERCICIO 1

 Cuenta la cantidad de A�s que hay en una cadena de texto.

PASOS:
- Desde el HTML se asigna una cadena de letras a la funci�n **busqueda** y una letra a buscar. 
- Dentro de esta funci�n iniciamos una variable donde se guardar� el resultado de nuestra suma
- Se crea un bucle que inicia en 0 hasta que sea menor que el valor de la longitud de la cadena, con la instrucci�n **cadena.length** tendremos esa longitud.
- Dentro de este bucle compararemos letra a letra en toda la cadena, si es igual al valor que le asignamos en segundo lugar a la funci�n desde el HTML, en este caso la "a". 
- Si el resultado es cierto ira acumul�ndose la variable **suma** de uno en uno
- Por �ltimo retornara el valor de suma con comentario a un **alert(resultado);**. alojado en la variable resultado

___

-. EJERCICIO 2

 Cuenta la cantidad de veces que se repite una letra, que el usuario puede escoger, en una cadena de texto.

PASOS:
Este ejercicio es igual que el anterior, pero nos da la opci�n al usuario de decidir que letra se quiere buscar en la cadena.
Para ello se define una variable en el HTML llamada **letra** donde estar� alojada la opci�n del usuario mediante el m�todo siguiente:


                ` <script>var cadena = prompt("inserta cadena")</script>
                  <script>var letra = prompt("�Que letras quieres buscar?")</script>
                  <script>var resultado = busqueda(cadena,letra);</script>`          
___


-.EJERCICIO 3

 Cuenta la cantidad de veces que se repite una letra done el usuario puede escoger la letra y la cadena de texto.

PASOS:
En este caso tambi�n est� basado en el ejercicio anterior, pero como valor a�adido le hemos dado la opci�n al usuario de inserta la cadena de caracteres, y como en el caso anterior, tambi�n se a a�adido otro **promt** para insertar la cadena y alojarla en la variable **cadena**.

___


-. EJERCICIO 4

 En este ejercicio se pretende saber en qu� posici�n se encuentra la primera letra "a" dentro de una cadena.

PASOS:
- El usuario tiene la opci�n de introducir la cadena de texto que estar� alojada en la variable **cadena**. Esta variable se comparte con la funci�n **busqueda**, donde tambi�n esta alojada la letra a buscar.
- En el JS iniciamos dos variables, una para alojar a la posici�n resultante y la otra ser� una variable de estado que la iniciamos con **false** y que la comentaremos posteriormente.
- Realizaremos un bucle para que a lo largo de la cadena nos encuentre la primera letra "a". Por lo que compararemos letra a letra si es igual a "a" adem�s de tener que cumplirse que la variable **repeat** sea **false**.
- En el caso que se cumpla la condici�n pasaremos el valor de i m�s uno( se le suma uno por el hecho de que el bucle empieza por 0) a la variable posici�n, y estado de **repeat** cambiara a **true**.
- La raz�n de a�adir la variable **repeat** es para determinar que ha encontrado la primera letra "a", ya que, si hubieran m�s de una, el valor de posici�n cambiaria a la siguiente localizaci�n, de este modo el **IF** solo funcionara la primera vez que encuentre la "a".
- Por �ltimo retornaremos los resultado por medio de un **alert**.

___

-. EJERCICIO 5

 En que posici�n se encuentra la primera letra "a" dentro de una cadena, con opci�n a que el usuario inserte la cadena.

PASOS:
- Este ejercicio es igual que el anterior, pero el usuario puede decidir qu� letra buscar dentro de la cadena.


                 `<script>var letra = prompt("�Que letras quieres buscar?")</script>`

- Estos valores se a�adir�n a la funci�n para poder tratarlos en nuestro JS

                 `function busqueda(cadena,letra){`

___

-. EJERCICIO 6
 

 Aqu� tratamos de saber en qu� posiciones se repite una letra de una cadena fija y guardarlas en una tabla.

PASOS:
- El funcionamiento es igual que lo visto anteriormente, con la diferencia de que se inicializa una tabla y en ella se va guardando las posiciones a medida que se va escaneando la letra
- El retorno del resultado lo hemos variado, se ha resaltado en rojo la letra que se est� buscando adem�s de en negrita. Pero no solo eso, en vez de mostrar el resultado en un **alert**, se ha decidido usar el m�todo **document.getElementById()**. Este devuelve un valor que tiene el atributo **ID** y lo muestra en el html directamente en vez de un mensaje.

___


-. EJERCICIO 7

 Dada una cadena de n�meros que inserta el usuario, contar la cantidad de veces que se repiten los numero e ingresarlos en una tabla.

PASOS:
- En primer lugar, se le pide al usuario que inserte la cadena num�rica que la compartiremos con la funci�n.
- Inicializamos una tabla y una variable **contador** que servir� para reiniciar a cero las sumas de n�meros repetidos cuando el bucle termine de comparar los numero del 0 al 9 progresivamente.
- Le damos a todos los datos de la tabla el valor **"no esta"**, una vez ya haya hecho la comparaci�n este dato cambiara al correcto. Esto lo realizo para que la tabla no tenga valores en blanco si el n�mero que revisa no est� en la cadena.
- Con el primer bucle nos servir� para comparar los n�meros del 0 al 9 y con el segundo correr� letra a letra por nuestra cadena seg�n su longitud.
- Dentro del **IF** iremos a�adiendo el valor de la posici�n m�s el de la suma del contador.
- Retornaremos al final los datos la tabla hacia un **document.getElementById()**.

___

-. EJERCICIO 8

 En una cadena con letras deseamos detectar si hay alg�n n�mero y en que posici�n se encuentra.

PASOS: 
- El usuario inserta una cadena de texto con alg�n numero
- El primer bucle recorre las posiciones de toda la cadena
- El segundo bucle sirve para que **IF** compare los valores del 0 al 9 para que posteriormente los a�ada a una tabla
- Hay un detalle para que la tabla solo se rellene con los n�meros que est�n repetidos, y es a trav�s de un contador llamado **repes** que solo se acumula cuando se cumpla esta condici�n.
- Por �ltimo, devuelve los datos de la funci�n con la cadena y el resultado.

___


DESCRIPCCION DE LOS EJERCICIOS PLA3 SEGUNDA PARTE
-------------------------------------------------


- EJERCICIO 1

 De una cadena fija cuenta los n�meros mayores que el introducido por el usuario

PASOS: 
- El usuario inserta el valor alojado en la variable **numero** y a�adida a la funci�n **busqueda**
- Declaramos una variable que contendr� nuestra **suma** y otra que tendr� la instrucci�n para cambiar el valor alfanum�rico a num�rico para que se pueda sumar. 
- En un bucle hasta la longitud de la cadena se usar� un **IF** para ver si el n�mero es mayor
- Como mencionamos antes al ser un dato alfanum�rico las suma de este dar�a como resultado el a�adir un numero tras otro sin realizar la suma deseada, de ah� la conversi�n
- Retornaremos el resultado en un **alert** donde reportamos la cantidad de n�meros que son mayores, el numero buscado, la cadena de n�meros y la suma de los n�meros mayores que el seleccionado.

___

-. EJERCICIO 2

 En una cadena donde hay A�s y B�s sumar cuantas hay de cada y poner las en una tabla

PASOS: 
- A�adimos el valor de la **cadena** a la funci�n **busqueda**
- Declaramos dos variables una para las A�s y otra para las B�s, adem�s iniciar la tabla donde se alojar�n los resultados.
- Creamos un bucle de tantos ciclos como letras en la cadena y dentro a�adimos dos **IF**, uno para comparar la igualdad con la letra A y otro con la letra B. En cada uno cuando se cumpla aumentar� su respectivo contador.
- Al finalizar los bucles les asignamos los valores de los contadores a las posiciones de la tabla.
- Retornaremos el valor de la tabla en el HTML.

___

-.EJERCICIO 3


 A�adir en cinco tablas con un vector de 5x5 donde nos de la suma de su diagonal

PASOS:
- inicializamos una tabla para para alojar nuestra cadena, una variable **suma** para guardar la suma de los elementos, una variable **diagonal** para poder visualizar f�cilmente los n�meros situados en la diagonal de las listas y por �ltimo la variable **contSuma** que ser� un contador que nos ayudar� a localizar los n�meros de la diagonal
- Entre bucles asignaremos un valor vac�o a la tabla
- Posteriormente llenaremos cada una de las 5 tablas con 5 elementos creados aleatoriamente (n�meros del 0 al 9) 
 

                 ` tabla[k]=tabla[k]+(Math.floor(Math.random() * 10));`

- La suma de esta l�nea se realiza con n�meros alfanum�ricos, es decir, a�adir� a la tabla un elemento tras otro
- Con la siguiente instrucci�n mostraremos en pantalla la tabla creada con los cinco elementos, a�adiendo un salto de p�gina para mostrar la siguiente l�nea 

                 `document.write(tabla[k]+"<br>");`
- Con la variable **diagonal** mostraremos de que n�meros se compone la diagonal y en la variable **suma** el resultado de la suma entre ellos.
- Al ser los numero alfanum�ricos, si queremos hacer la suma los tenemos que convertir para poder hacer el c�lculo. Esto lo lograremos con el m�todo **parseInt();**, quedando de esta forma.

 
                 `suma =suma + parseInt(tabla[k].charAt(contSuma));`

- Por �ltimo retornaremos la funci�n **busqueda** con los valores de la **suma** y la **diagonal**.

___

-. EJERCICIO (4-5)

 Este ejercicio es similar al anterior, pero en vez de usar 5 listas usaremos una donde est�n los 25 elementos del vector 5 por 5.

PASOS:
- En primer lugar, crearemos nuestra tabla y la llenaremos con un bucle hasta de 25 ciclos para ir acumulando uno tras otro los n�meros que saldr�n aleatoriamente como hemos visto en ejercicios anteriores.
- Seguidamente se mostrar� la cadena completa, pero para que sea m�s f�cil visualizarla los n�meros de la diagonal estar�n con letra roja. Para eso son los **if�s**, cuando coincide con el numero de la diagonal, este se colorea en caso contrario pasa a ser negro. 
- Para determinar el n�mero de la cadena que pertenece a la diagonal, se ha creado un contador que va de seis en seis.
-Para finalizar se crea otro bucle para realizar la suma aritm�tica con la ayuda de otro contador llamado **espaciado** que har� saltos de seis en seis y se mostrara los n�meros de la diagonal y su suma que ser�n retornados a la funci�n.

___

-. EJERCICIO 6

 Este ejercicio tendr� la misma funcionalidad que el anterior, con la diferencia de que el usuario podr� determinar de cuanto quiere que sea el vector y que en vez de usar varias tablas usaremos una matriz.

PASOS:
- El usuario tiene que primero ingresar de cuanto quiere la matriz de la misma cantidad de filas que columnas, (por lo que solo tendr� que introducir un solo n�mero). Como ya hemos visto anteriormente lo haremos con un m�todo **prompt("");**
- Esta vez vamos a filtrar los datos del usuario para delimitar su contenido, por eso haremos dos pasos adicionales
- Queremos que el numero este comprendido entre 0 y 100 por ello crearemos un **if** para verificar que sea as�. En el caso que sea mayor dar� un mensaje de error y retorna la funci�n.


                  `if (numero>100){ 
		               return" Numero demasiado alto ha de estar entre 0 y 100";
	                }`
- Pero adem�s se ha a�adido un filtro m�s. �Y si el valor ingresado por el usuario no es un numero si no una letra o un s�mbolo?. Para ello hemos creado otro **if** que divide el valor ingresado por uno, si es un numero nos tendr�a que devolver el mismo valor, si no lo es esta condici�n no se cumple.

                   Es decir     eje. 50 / 1 = 50; A / 1 = ??

   La comparaci�n quedar�a as�:    
   
                 `	if ((numero/1)!=numero){ 
		             return" La cadena han de ser numeros no letras ni simbolos";
	               } 
- Para iniciar la matriz se har� como una tabla normal, pero a la hora de ingresar datos hay que dar un valor inicial

                 `var tabla=[];                 
                  for (var k=0; k<longitudColumnas; k++){                  
			             tabla[k]=[];			             
			           for (var i=0; i<longitudFilas; i++){			            
			             tabla[k][i]= dato a introducir;			         
			             {`
			             
- Llenaremos nuestra tabla con n�meros aleatorio y marcaremos en rojo la diagonal como henos visto en ejercicios anteriores.
- Para extraer los datos se ha creado otro bucle que se mueve por la diagonal (usando la misma variable para columnas y filas) y mostrando su resultado-
- por �ltimo, retornaremos el valor de la suma.

___

-. EJERCICIO 7

Usando la matriz de ejercicio anterior, hay que indicar que n�meros por encima de la diagonal, son mayore, menores o iguales a cero

PASOS:
- La parte para insertar los datos ser� igual que el ejercicio anterior.
- Se crear�n tres variables para alojar la suma de los n�meros mayores, menores e iguales a cero en las variables 
 

                   `var contadorIgual=0;
    	            var contadorMayor=0;
    	            var contadorMenor=0;`   

- La l�gica se encuentra a la hora de extraer los datos. Se har�n tres **if�s**, uno para el valor mayor de cero, otro para el meno y otro para el igual, cada uno con su respectivo contador.
- Inicialmente se ha creado una variable **cont** con el valor de uno y una con el nombre de **suma** con valor 0.
- Se inicia un bucle hasta el n�mero total de columnas e iniciamos el contador **suma**.
- Abrimos el siguiente bucle que ira hasta el n�mero de filas, pero le iremos restando el valor de suma cada vez que complete su ciclo. Con esto conseguimos igualar la posici�n del n�mero de fila que me interesa, con la duraci�n del bucle.
- Con el contador **cont** determinaremos la posici�n del n�mero que queremos sumar. 
- Por �ltimo, retornaremos el valor de las tres variables.

___

-. EJERCICIO 8

Dada una matriz de tama�o a elegir por el usuario, hacer la media aritm�tica de cada fila e introducir los datos en un vector

PASOS:
- La inserci�n de datos en la matriz es igual que en el ejercicio anterior
- Se inicializa adem�s una tabla llamada **media** donde alojaremos nuestro calculo final.
- El primer bucle de salida de datos se usar� para las columnas y el segundo para las filas.
- En este �ltimo, iremos sumando en la variable **suma** los valores de la fila. Una vez finalice, antes de que se inicie el segundo, guardara en la tabla el valor de la suma de esa fila dividido por el n�mero de datos (la media).
- En �ltimo lugar retornaremos el valor de la tabla **media**.

___

DESCRIPCCION DE LOS EJERCICIOS INICIALES EN JAVASCRIPT
------------------------------------------------------


-. EJERCICIO 1

 Crea una funci�n para cada operador l�gico (suma, resta, multiplicaci�n y divisi�n) con 3 y 15.
- En el c�digo html definimos la variable resultado donde estar� nuestra funci�n, a esta le a�adiremos los dos valores compartidos.
- En nuestro archivo JS declaramos una variable por operador usado donde directamente realizara la operaci�n. Estos valores los extraemos de la funci�n que hemos llamado **valores** y les asignamos los nombres de **numUno** y **numDos**
- Solo nos queda imprimir en pantalla el resultado y retornarlo.

___

-. EJERCICIO 2

  Suma los n�meros entre si de una cadena enviada con la funci�n **SumaDiezNumeros**
  
PASOS:  
- En la variable **resultado** estar� nuestra funci�n **SumaDiezNumeros**, en ella pondremos la cadena de n�meros.
- Asignaremos a la variable **suma** el valor num�rico (convertido de alfanum�rico a num�rico por el m�todo **parseInt()**) del primer n�mero de la cadena. Si el valor de la cadena se cambiase, esta variable siempre tendr�a el contenido del primer n�mero.
- iniciamos un bucle que va desde 1 (ya que en **suma** sabemos que hay, necesitamos el numero siguiente para sumarlo) hasta la cantidad de n�meros de la cadena (de igual modo que en el caso anterior, si la cadena aumenta de n�meros no nos afectara en el funcionamiento).
- Se ir�n sumando los n�meros una a uno al mismo tiempo que los convertimos en num�ricos
- Se ha a�adido una visualizaci�n m�s clara para ver los resultados.
- Retornaremos el valor del contenido suma a la variable resultado de nuestra funci�n

___

-. EJERCICIO 3

  Calcula la media aritm�tica de una cadena de 1 a la **n** donde este es un par�metro de la funci�n
 
PASOS:
- El usuario tendr� la opci�n de ingresar hasta que numero quiere hacer la media donde ser� a�adido a la funci�n
- Haremos un bucle de tantos ciclos como numero tenga la cadena 
- En la variable suma guardaremos la suma de todos los n�meros
- Se ha a�adido un **if else** para que en pantalla nos salga el signo igual o el de +, para una mejor presentaci�n.
-Por �ltimo, el valor de la suma que ya estar� fuera del bucle, ser� dividido por la cantidad de n�meros
- El valor ser� retornado en la variable media.

___


-. EJERCICIO 4


   Dada una cadena del 0 al 9 que pondremos dentro de una funci�n, cuenta los n�meros m�s grandes que el valor ingresado por el usuario, y en el caso que el resultado sea mayor que la mitad de la cadena mas uno, devuelve el valor 1 si no 0

PASOS:
- Le pediremos al usuario los valores de la cadena y numero a comparar en ella a�adiendo los datos a la funci�n **valores**
- Dentro de un bucle de tantos ciclos como caracteres tiene la cadena, comparamos con **if** si el valor num�rico del car�cter es mayor al siguiente numero de la cadena, que los sume.
- Luego, cuando finalice el bucle, necesitamos ver si el valor de **suma** es mayor o menor la mitad de la cadena mas uno.
Operadores:


                `(suma>(lenCadena/2)+1)`
                `(suma<(lenCadena/2)+1)`
                
- Hemos a�adido una comparaci�n inicial para evitar un resultado de igualdad (en este caso dar� un valor de **null**), que en el caso de que no se cumpla, se realizaran las otras comparaciones.

Operador:

       
                `(suma==(lenCadena/2)+1)
                
                 //* ejemplo: 1112333333 3x6=18/2=9+1=10= longitud de la cadena`
 
- Por �ltimo, retornamos el valor en la variable de estado mayor Menor

___

-. EJERCICIO 5

   Dada una cadena con A�s B�s C�s... dentro de una funci�n, devuelve la cantidad de letras repetidas con el siguiente formato A=1, B=2, C=2,...

PASOS:
- La entra por usuario de la cadena ser� insertada en la funci�n **abcd**
- Creamos principalmente una variable con todas las letras de abecedario, una tabla y una que contenga el valor de la suma
- En un bucle hasta longitud de la cadena, daremos un valor a la tabla de "", para no dejar posiciones sin valor
- En el bucle indexado compararemos si el valor de la letra del abecedario est� en la cadena en caso de ser cierto suma el valor y lo asigna a la tabla.
- El valor de la suma se reiniciar a cero, para comparar la siguiente letra del abecedario.

___


-.EJERCICIO 6

 En un mismo mensaje retorna los valores del ejercicio 3 y 5
 Con este ejercicio se pretende unificar dos funciones llamadas por un mismo c�digo
 
 PASOS:
- En un mismo JS se ha colocado las funciones de cada ejercicio
- En el HTML se pide los valores de la cadena de A�s, B�s... y el numero para hacer la media, en las variables **cadenaABC** y **numer** respectivamente.
- estas se a�aden a las funcione **abdc** y **mediaAritmetica** que retornar�n los datos que ser�n sumados con las variables **resultado1** y **resultado2**

___




Ejercicios realizados por Juan Jos� Gonz�lez Pozo que recive formacion en el centro La Violeta 

Con el apoyo del Pla De Qualificaci� en Tecnologia M�bil **PQTM** 

Barcelona 23 de Junio 2019
____




  







                      






















































