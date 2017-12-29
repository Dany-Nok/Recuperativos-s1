// EJERCICIOS FÁCILES:

/* EJERCICIO N° 12:
Realizar un programa que permita analizar si una palabra que el usuario introduce por teclado es palíndroma o no.
Si es palíndroma debe retornar true, en caso contrario false.
Palíndroma: palabra que se lee igual de adelante hacia atrás como de atrás hacia adelante. Ejemplo: Amalama */

//    var isPalindrome = prompt("Escribe una palabra o frase, para revisar si es palíndroma!");
    /* LA PÁGINA LANZARÁ UN PROMPT PARA QUE EL USUARIO ESCRIBA UNA PALABRA O FRASE */

//      function checkString(isPalindrome) {
        /* ESTA FUNCION "TOMA" LA PALABRA ESCRITA POR EL USUARIO EN EL PROMPT */

//        isPalindrome = isPalindrome.toLowerCase().replace(/\s/g,"");
          /* LA PALABRA QUE HAYA INGRESADO EL USUARIO, PRIMERO SE PASARÁ SOLO A MINUSCULAS.
          EL CODIGO QUE SE USA PARA "REPLACE" QUITA LOS ESPACIOS EN CASO DE QUE SE HAYA INGRESADO UNA FRASE */

//        var reverseWordArr = isPalindrome.split("").reverse("").join("");
          /* CREO UN NUEVO ARRAY QUE CONTENDRA LA PALABRA EN ORDEN INVERTIDO POR MEDIO DE:
          - SPLIT: SEPARA LA PALABRA LETRA POR LETRA
          - REVERSE: INVIERTE EL ORDEN DE LAS LETRAS DE LA PALABRA ORIGINAL INGRESADA
          - JOIN: UNE LAS LETRAS EN ESTA NUEVA VARIABLE (ARRAY)*/

//          if (isPalindrome === reverseWordArr) {
            /* SE USA LA CONDICION DE SI LA PALABRA DE isPalindrome ES IGUAL A reverseWordArr,
            RETORNARA UN MENSAJE EN LA CONSOLA ESPECIFICANDO QUE ES "TRUE" MÁS UNA FRASE */
//            console.log(true + " La palabra (o frase) ES palíndroma! :D");
            /* (TAMBIÉN SE PUEDE VER COMO ALERT)
              alert(true + " La palabra (o frase) ES palíndroma! :D"); */

//          } else {
            /* EN CASO CONTRARIO LANZARÁ OTRO MENSAJE EN CONSOLA ESPECIFICANDO QUE ES "FALSE" MÁS UNA FRASE */
//            console.log(false + " La palabra (o frase) NO es palíndroma :(");
            /* (TAMBIÉN SE PUEDE VER COMO ALERT)
            alert(true + " La palabra (o frase) NO es palíndroma! :("); */
//          }

//      }

//    checkString(isPalindrome); /* SE LLAMA A LA FUNCION PARA PROBAR PALABRAS */

//===============================================================================================================

/* EJERCICIO N° 14:
Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.
Ejemplo: input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
         output nuevoArr = [2, 4, 6, 8, 10] */

//  var inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  /* DE ESTE ARRAY DE EJEMPLO SE DEBEN OBTENER SOLO LOS NÚMEROS PARES */

//    var numPar = inputArr.filter(i => i % 2 === 0);
    /* CREO UNA VARIABLE (numPar) QUE "FILTRE" LOS NÚMEROS PARES DEL ARRAY.
    EL MÉTODO DE FILTRO AYUDARÁ A IDENTIFICAR LOS NÚMEROS PARES.
    SI EL RESULTADO DEL RESTO ES IGUAL A 0, EL NÚMERO ES PAR */

//    var nuevoArr = numPar;
    /* CREO VARIABLE PARA EL NUEVO ARRAY, QUE CONTENDRÁ SOLAMENTE LOS NÚMEROS PARES SOLICITADOS */

//    console.log(nuevoArr);
    /* EL NUEVO ARRAY SE MOSTRARÁ EN LA CONSOLA */

    /* O EN SU LUGAR, SE PODRÁ MOSTRAR COMO ALERT EN LA VENTANA DEL NAVEGADOR (SE DEBE QUITAR COMENTARIO)
    alert("El nuevo array tiene los números: " + nuevoArr); */

//===============================================================================================================

/* EJERCICIO N° 15:
Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.
Ejemplo: input arr = [1, 2, 3, 4]
		     output nuevoArr = [12, 24, 36, 48] */

//  var inputArr = [1, 2, 3, 4];
    /* ESTE ES EL ARRAY CON LOS NUMEROS DE EJEMPLO A MULTIPLICAR */
//  var nuevoArr = [];
    /* EN ESTE ARRAY IRA EL RESULTADO DE CADA NUMERO DEL inputArr MULTIPLICADO POR 12 */

//  for (var i = 1; i <= inputArr.length; i++) {
    /* SE USA FOR PARA QUE RECORRA TODOS LOS ELEMENTOS DEL ARRAY */
//    var result = [[i] * 12];
      /* CREO LA VARIABLE "RESULT", DONDE SE LE INDICA QUE CADA ELEMENTO DEL inputArr DEBE SER MULTIPLICADO POR 12 */
//    nuevoArr.push(result);
      /* EN EL nuevoArr (QUE ESTÁ VACIO) SE IRAN AGREGANDO (O PUSHEANDO) LOS RESULTADOS DE CADA MULTIPLICACION,
      HASTA QUE FOR HAYA TERMINADO DE RECORRER EL inputArr */
//  }
//  console.log(nuevoArr);
    /* SE MOSTRARA EL RESULTADO DE LOS ELEMENTOS DE nuevoArr EN LA CONSOLA */


//===============================================================================================================
// EJERCICIOS MEDIOS:

/* EJERCICIO N° 10:
Un grupo de amigos van a un evento y sus nombres están dentro de un arreglo.
Escribir una función donde dado el nombre de la persona puedas retornar el asiento que le toca.
La numeración comienza en 1, si la persona no tiene asiento retornar 0.
Ejemplo:  lista = [“Allison”, “Belén”, “Nadia”, “Marcia”, “Ale”, “Fabián”]
		    nombre = “Nadia”
		    retorna 3 */

//        var invitado = prompt("Ingresa tu nombre para verificar el asiento que te corresponde :) ");
        /* LA PÁGINA LANZARÁ UN PROMPT PARA QUE EL USUARIO ESCRIBA UN NOMBRE */
//        var lista = ["Allison", "Belén", "Nadia", "Marcia", "Ale", "Fabián"];
        /* EN ESTE ARRAY SE ENCUENTRAN LOS NOMBRES DE QUIENES ESTAN INVITADOS Y SÍ TIENEN ASIENTO ASIGNADO */

//         var search = function(array, element){
          /* ESTA FUNCION BUSCARA LOS INDICES DE CADA ELEMENTO EN EL ARRAY */
//           for (var i = 0; i < lista.length; i++) {
            /* POR MEDIO DE UN FOR */
//             if (lista[i] === invitado) {
              /* EN LA CONDICION SE UTILIZA EL "ALGORITMO DE BUSQUEDA LINEAL" QUE DEBE COMPARAR
              EL NOMBRE(NUMERO) DE QUIEN SE SOLICITA CON SU INDICE */
//                 return [i+1];
                  /* EN CASO DE ENCONTRARLO, RETORNARA SU INDICE+1 (QUE SERÍA EL NÚMERO DE ASIENTO) DENTRO DEL ARRAY */

               } /*return 0;*/
               }
             }

//          search(lista);
//          console.log("Hola " + invitado + "!" + " Tu número de asiento es el " + search(lista,invitado));

          /* NOTA: ESTA FUNCION FUE PROBADA CON TODOS LOS NOMBRES DEL ARRAY LISTA, SIN EMBARGO SI SE COLOCA
          CUALQUIER OTRO NOMBRE, DA COMO RESULTADO "ASIENTO UNDEFINED" Y NO 0 */

//===============================================================================================================

/* EJERCICIO N° 8:
Dado un arreglo y un número, retornar el índice (posición) del número.
Ejemplo: arr = [1, 5, 8, 19]
		  number = 8
		  retorna 2 */

//    var arr = [1, 5, 8, 19];
    /* ESTE ES EL ARRAY CON LOS NUMEROS DE EJEMPLO PARA BUSCAR SU INDICE */

//    var search = function(arr, element){
      /* ESTA FUNCION BUSCARA LOS INDICES DE CADA ELEMENTO EN EL ARRAY */
//      for (var i = 0; i < arr.length; i++){
        /* POR MEDIO DE UN FOR */
//        if (arr[i] === element){
          /* EN LA CONDICION SE UTILIZA EL "ALGORITMO DE BUSQUEDA LINEAL" QUE DEBE COMPARAR
          EL NUMERO QUE SE SOLICITA CON SU INDICE */
//          return i
          /* EN CASO DE ENCONTRARLO, DEBE RETORNAR SU INDICE DENTRO DEL ARRAY */
//        }
//      }
//    }

    /* CON CONSOLE LOG, COMPRUEBO QUE LA FUNCION SEARCH ESTÉ CORRECTA. PRIMERO CON EL NUMERO SOLICITADO
    Y DESPUES CON EL RESTO DE NUMEROS DEL ARRAY. ADICIONALMENTE OTRO NUMERO QUE NO SE ENCUENTRE */
//    console.log(search(arr,8));
//    console.log(search(arr,1));
//    console.log(search(arr,5));
//    console.log(search(arr,19));
//    console.log(search(arr,3));

//===============================================================================================================
// EJERCICIOS DIFICILES:

/* EJERCICIO N° 4:
Dado un arreglo de números positivos, encontrar el elemento más pequeño y retornar su índice.

Ejemplo: arr = [1, 2, 3]
			   retorna 0

			   arr = [3, 2, 1]
			   retorna 2 */

//         var arr = [1, 2, 3];
//         var arrB = [3, 2, 1];
         /* ESTOS SON LOS ARRAYS CON LOS NUMEROS MENORES QUE SE DEBEN BUSCAR PARA QUE DEN SU INDICE */

//         var min = Math.min.apply(null, arr);
         /* ESTA FUNCION BUSCARA EL MENOR DE LOS ELEMENTOS EN EL ARRAY INDICADO
         (AL HABER 2 ARRAYS, SE DEBE ESPECIFICAR POR EL NOMBRE, EN ESTE CASO "arr" O "arrB" */

//         var search = function(arr, min){
           /* ESTA FUNCION BUSCARA EL INDICE DEL ELEMENTO MENOR EN EL ARRAY */
//           for (var i = 0; i < arr.length; i++){
             /* POR MEDIO DE UN FOR */
//             if (arr[i] === min){
               /* EN LA CONDICION SE UTILIZA EL "ALGORITMO DE BUSQUEDA LINEAL" QUE DEBE COMPARAR
               EL NUMERO MENOR QUE SE SOLICITA CON SU INDICE */
//               return i
               /* EN CASO DE ENCONTRARLO, DEBE RETORNAR SU INDICE DENTRO DEL ARRAY */
//             }
//           }
//         }

         /* CON CONSOLE LOG, COMPRUEBO QUE LA FUNCION ESTÉ CORRECTA. PRIMERO CON EL PRIMER ARRAY
         Y DESPUES CON EL SEGUNDO */
//         console.log(search(arr, min));
//         console.log(search(arrB, min));
