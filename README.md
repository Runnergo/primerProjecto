# Primer Proyecto

INTRODUCCION
------------

Este primer proyecto en JavaScript esta basado en los ejercicios realizados en scratch de la PLA·3 primera y segunda, parte adaptando  el codigo al entorno de JavaScript.

Se han añadido tambien los ejercicios de iniciales realizado en este lenguaje, aunque no heran requeridos para este proposito, con el fin de tenerlos agrupados en un unico codigo.


INICIO DE VISUALIZACION DEL HTML:

Para lograr un mejor Clean Code se ha creado un archivo llamado HomeMenu.html en el se encuentran una serie de botones que dan acceso a los distintos ejercicios.
Para volver al menu de ejercicios, hay que usar el acceso de pagina anterior de nuestro explorador.


DESCRIPCCION DE LOS EJERCICIOS PLA3 PRIMERA PARTE
-------------------------------------------------


------EJERCICIO 1------
-----------------------


PASOS:
- Desde el HTML se asigna una cadena de letras a la funcion busqueda y una letra a buscar. 
- Dentro de esta funcion iniciamos una variable donde se guardara el resultado de nuestra suma
- Se crea un bucle que inicia en 0 asta que sea menor que el valor de la longitud de la cadena
- Dentro de este bucle compararemos letra a letra en toda la cadena, si es igual al valor que le asignamos en segundo lugar a la funcion  desde el HTML, en este caso la "a". 
- Si el resultado es cierto ira acumulandose la variable suma de uno en uno
- Por ultimo retornara el valor de suma con un comentario con un alert.


------EJERCICIO 2------
-----------------------

Este ejercicio es igual que el anterior pero nos da la opcion al usuario de decidir que letra se quiere buscar en la cadena.
Para ello se usa en el HTML un promt que asignara a la variable letra ese valor.


------EJERCICIO 3------ 
-----------------------

En este caso tambien esta basado en el ejercicio anterior, pero como valor añadido le hemos dado la opcion al usuario de inserta la cadena de caracteres, y como en el caso anterior, tambien se a añadido otro promt vara insertar la cadena y alojarla en la variable cadena.


------EJERCICIO 4------
----------------------- 

En este ejercicio se pretende saber en que posicion se encuentra la primera letra "a" dentro de una cadena.

PASOS:
- El usuario tiene la opcion de introducir la cadena de texto que estara alojada en la variable cadena. Esta variable se comparte con la funcion busqueda, donde tambien esta alojada la letra a buscar.
- En el JS iniciamos dos variables, una para alojar a la posicion resultante y la otra sera una variable de estado que la iniciamos con false y que la comentaremos posteriormente.
- Realizaremos un bucble para que a lo largo de la cadena nos encuentre la primera letra "a". Por lo que compararemos letra a letra si es igual a "a" ademas de tener que cumplirse que la variable repeat sea false.
- En el caso que se cumpla la condicion pasaremos el valor de i mas uno( se le suma uno por el hecho de que el bucle empieza por 0) a la variable posicion, y estado de repeat cambiara a true.
- La razon de añadir la variable repeat es para determinar que ha encontrado la primera letra "a", ya que si ubieran mas de una, el valor de posicion cambiaria a la siguente localizacion, de este modo el IF solo funcionara la primera vez que encuentre la "a".
- Por ultimo retornaremos los resultado por medio de un alert.


------EJERCICIO 5------ 
-----------------------

Este ejercicio es igual que el anterior, pero el usuario puede decidir que letra buscar dentro de la cadena.


------EJERCICIO 6------
----------------------- 

Aqui tratamos de saber en que posiciones se repite una letra de una cadena fija y guardarlas en una tabla.

PASOS:
- El funcionamiento es igual que lo visto anteriormente, con la diferencia de que se inicializa una tabla y en ella se va guardando las poosiciones a medida que se va escaneando la letra
- El retorno del resultado lo hemos variado, se ha resaltado en rojo la letra que se esta buscando ademas de en negrita. Pero no solo eso, en vez de mostrar el resultado en un aletr, se ha decidido usar el metodo document.getElementById(). Este devuelve un valor que tiene el atributo ID y lo muestra en el html directamente en vez de un mensaje.


------EJERCICIO 7------
----------------------- 

Dada una cadena de numeros que inserta el usuario, contar la cantidad de veces que se repiten los numero e ingresarlos en una tabla.

PASOS:
- En primer lugar se le pide al usuario que inserte la cadena numerica que la compartiremos con la funcion.
- Inicializamos una tabla y una variable contador que servira para reiniciar a cero las suma de numeros repetidos cuando el bucle termine de comparar los numero del 0 al 9 progresivamente.

- Le damos a todos los datos de la tabla el valor de que el numero no esta en la cadena, una vez ya haya hecho la comparacion este dato cambiara al correcto. Esto lo realizo para que la tabla no tenga valores en blanco si el numero que revisa no esta en la cadena.
- Con el primer bucle nos serbira para comparar los numeros del 0 al 9 y con el segundo correra letra a letra por nuestra cadena segun su longitud.
- Dentro del IF iremos añadiendo el valor de la posicion mas el de la suma del contador.
- Retornaremos al final los datos la tabla hacia un document.getElementById().


------EJERCICIO 8------
----------------------- 

En una cadena con letras deseamos detectar si hay algun numero y en que posicion se encuentra.

PASOS: 
- El usuario inserta una cadena de texto con algun numero
- El primer bucle recorre las posiciones de toda la cadena
- El segundo bucle sirbe para que IF compare los valores del 0 al 9 para que posteriormente los añada a una tabla
- Hay un detalle para que la tabla solo se rellene con los numeros repetidos y es atraves de un contador llamado repes que solo se acumula cuando el numero esta repetido, al usarlo para variar las posiciones de la tabla, solo rellenara la cantidad de numeros encontrados
- Por ultimo devuelve los datos de la funcion con la cadena y el resultado.



DESCRIPCCION DE LOS EJERCICIOS PLA3 SEGUNDA PARTE
-------------------------------------------------


------EJERCICIO 1------
----------------------- 

De una cadena fija cuenta los numeros mayores que el introducido por el usuario

PASOS: 
- El usuario inserta el valor alojado en la variable numero y añadida a la funcion busqueda
- Declaramos una variable que contendra nuestra suma y otra para que tendra la instruccion para cambiar el valor alfanumerico a numerico para que se pueda sumar. 
- En un bucle hasta la longitud de la cadena se usara un IF para ver si el numero es mayor
- Como mencionamos antes al se un dato alfanumerico las suma de este daria como resultado el añadir un numero tras otro sin realizar la suma deseada, de hay la conversion
- Retornaremos el resultado el un alert donde reportamos la catidad de numeros que son mayores, el numero buscado, la cadena de numeros y la suma de los numeros mayores que el seleccionado.


------EJERCICIO 2------
----------------------- 

En una cadena donde hay A´s y B´s sumar cuantas hay de cada y poner las en una tabla

PASOS: 
- Añadimos el valor de la cadena a la funcion busqueda
- Declaramos dos variables una para las A´s y otra para las B´s, ademas iniciar la tabla donde se alojaran los resultados.
- Creamos un bucle de tantos ciclos como letras en la cadena y dentro añadimos dos IF, uno para comparar la igualdad con la teltra A y otro con la letra B. En cada uno cuando se cumpla aunmentara su respectivo contador.
- Al finalizar los bucle asignamos los valores de los contadores a las posiciones de la tabla.
- Retornaremos el valor de la tabla en el HTML.


------EJERCICIO 3------
----------------------- 




------EJERCICIO (4-5)--
----------------------- 

Añadir en una tabla un vector de 5x5 donde nos de la suma de su diagonal











































