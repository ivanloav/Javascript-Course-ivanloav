// Ejercicio 1
    // aboutme.js

    // Variables que almacenan información personal
    let nombreCompleto = "Iván López";
    let profesion = "Administración de sistemas";
    let puestoDeseado = "Full Stack Web development";

    // Variable que utiliza template literals
    let mensajePersonal = `Hola, me llamo ${nombreCompleto} y me dedico a ${profesion}. Estoy cursando este Máster porque me gustaría trabajar en ${puestoDeseado}`;

    // Mostrar el mensaje por consola
    console.log(mensajePersonal);

import { copyFile } from "fs";
    import "./aboutme.js";
    console.log("Ejercicio 1");
/*
Ejercicio 2
    Primero se ejecuta el contenido de `aboutme.js`. El motivo es porque, de antes la llamada a `console.log()`, importamos el fichero `aboutme.js` y es evaluado en el momento del imposrt, 
        así que se ejecuta en ese momento.

Ejercicio 3
*/
    for (let i = 0; i <= 100; i++) {
        if (i % 7 === 0) {
            console.log(i);
        }
    }
/*
Ejercicio 4
¿Qué valor tendrá la variable i al finalizar el bucle? 
    El valor de la variable i será 101. 

¿Por qué? 
    El valor de i es incrementado en cada iteración del bucle y el bucle continúa mientras i sea menor que 101. 
    Una vez que i llega a 101, la condición i < 101 ya no se cumple y el bucle termina. En ese momento, i conserva su último valor, que es 101, y ese valor se imprime con console.log(i).

¿Habría alguna forma de evitar que la variable i se declare de forma global?
    El uso de var para declarar i hace que tenga un alcance (scope) de función o global si no está en una función. 
    Si i es declarada dentro de un bloque, no se limita a ese bloque, lo que puede tener efectos no deseados si se utiliza la misma variable i en otra parte del código.

    Para evitar que la variable i se declare de forma global, podemos usar let o const para la declaración en lugar de var. let y const tienen alcance de bloque 
    (block scope), lo que significa que i solo existirá dentro del bucle for.

Ejercicio 5
Principales diferencias:

    * CORS y pruebas locales: Al usar módulos (<script type="module">), debes servir los archivos a través de un servidor debido a los requisitos de seguridad de CORS. Si intentas cargar un archivo 
        localmente (con una URL file://), te encontrarás con errores de CORS​​.
    * Modo Estricto: Los módulos se ejecutan automáticamente en modo estricto, lo que no sucede con los scripts estándar a menos que se declare explícitamente dentro del script​​.
    * Diferimiento: No es necesario usar el atributo defer en un módulo, ya que los módulos se difieren automáticamente. Para los scripts estándar, se debe agregar defer para lograr el mismo efecto​​.
    * Ejecución y alcance: Los módulos solo se ejecutan una vez, incluso si se hacen referencia en varias etiquetas <script>. Además, las características importadas en un módulo no están disponibles 
    *   en el ámbito global, por lo que no podrás acceder a ellas desde la consola de JavaScript, por ejemplo​​.
    * Importación y exportación: Solo puedes usar las declaraciones import y export dentro de módulos.

Principales comportamientos de ambas:
    Scripts Estándar (<script>):
        * Se ejecutan inmediatamente a medida que el navegador los encuentra, a menos que se especifique el atributo defer.
        * Operan en modo no estricto a menos que se especifique "use strict".
        * Los scripts pueden tener variables y funciones en el ámbito global.
        * No admiten instrucciones de import y export.

    Scripts de Módulo (<script type="module">):
        * Se cargan en modo diferido (defer), ejecutándose después de que el documento HTML se ha parseado completamente.
        * Siempre se ejecutan en modo estricto.
        * Tienen su propio ámbito de bloque y no pueden acceder ni ser accedidos por el ámbito global.
        * Solo se ejecutan una vez, incluso si se referencian varias veces.
        * Permiten el uso de import y export para importar y exportar funciones, objetos o primitivas desde/hacia otros módulos​​.

Ejercicio 6
*/
// Función constructora
function Formatter() {
    this.prefix = 'Hello ';
    this.append = function(string){
        console.log(this.prefix + string);
    }
  }
  
  // Crear una instancia del objeto Formatter
  const formatter = new Formatter();
  formatter.append('World'); // Result: Hello World
  
  // Añadir método toLowerString al prototipo de Formatter
  Formatter.prototype.toLowerString = function(string) {
    console.log(string.toLowerCase());
  };
  
  // Llamar al método toLowerString
  formatter.toLowerString("I’m Iván"); // Result: i’m lucas
  

  