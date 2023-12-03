// Ejercicio 1
const objectProperty = objeto => Object.keys(objeto);

let person1 = {
  name: "Iván",
  age: 35,
  profession: "IT Manager"
};

console.log(objectProperty(person1)); 

// Ejercicio 2

// Valor de ‘this’ en JavaScript
    // Contexto global: ‘this’ se refiere al objeto global.
          console.log(this === window); // true

    // Contexto global: ‘this’ se refiere al objeto global
          console.log(this === window); // true

    // Contexto de función: dependiendo de cómo se invoque la función, tenemos dos posibilidades de valor:
      // Modo no estricto: ‘this’ se refiere al objeto global
          function myFunc() {
          return this;
          }
          console.log(myFunc());

      // Modo estricto: ‘this’ es undefined
          function myFunc() {
          "use strict";
            return this;
          }
          console.log(myFunc());

    // Contexto de método: ‘this’ se refiere al objeto que contiene el método
          const myObj1 = {
            myMethod() {
              return this;
            }
          };
          console.log(myObj1.myMethod() === myObj1); // true

          // Contexto de método con arrow function: ‘this’ se refiere al contexto de la función:
          const myObj2 = {
            Object: "myObject",
            arrowFunc: function() {
              console.log(this.Object);
            }
          };
          myObj2.arrowFunc();

    // Contexto de evento: ‘this’ se refiere al elemento que recibe el evento:
          function actionButtonReceiver() {
              console.log("Button pressed with->");
              console.log(this);
          }

    // Métodos call(), bind() o apply(): modifican el valor de ‘this’ al objeto que enlazan.
      // call(): llama a una función con un valor this asignado y argumentos proporcionados individualmente.
          function greet() {
            console.log(`Hola, soy ${this.name}`);
          }

          const person2 = { name: 'Iván' };
          greet.call(person2);  // Output: "Hola, soy Iván"

      //apply(): los argumentos adicionales se pasan como un array.
          function intro(language1, language2) {
            console.log(`Hola, soy ${this.name} y hablo ${language1} y ${language2}`);
          }

          const person3 = { name: 'Iván' };
          intro.apply(person3, ['español', 'inglés']);  // Output: "Hola, soy Carlos y hablo español y inglés"

      //bind(): crea una nueva función que, cuando se llama, tiene su this establecido en el valor proporcionado.
          function goodbye() {
            console.log(`Adiós, soy ${this.name}`);
          }

          const person4 = { name: 'Iván' };
          let sayGoodbye = goodbye.bind(person4);
          sayGoodbye();  // Output: "Adiós, soy Iván"
        
/*
Diferencias entre arrow functions y function expressions

  Sintaxis:
    Las arrow functions ofrecen una sintaxis más breve y clara. Por ejemplo, */let addShorter = (x, y) => x + y; /*es más conciso que la versión de function expression en ES5.
    Permiten eliminar los corchetes y el return en funciones de una sola expresión.
    Si solo tienen un argumento, pueden omitir los paréntesis alrededor del parámetro.
  
  Binding de arguments:
    Las arrow functions no tienen su propio objeto arguments. Esto contrasta con las function expressions, donde puedes acceder a arguments para obtener todos los argumentos pasados a la función.
    En las arrow functions, para lograr un efecto similar, necesitarías usar el operador de propagación/resto (...args).
    
  Uso de this:
    Las arrow functions capturan el valor de this del contexto donde fueron creadas, no creando su propio this. Esto es útil para evitar problemas comunes de this en callbacks.
    Las function expressions tradicionales tienen su propio this, que depende de cómo se llama la función.

  Palabra reservada new:
    Las function expressions pueden ser utilizadas como constructores con new. Tienen una propiedad prototype, que es utilizada en la construcción de nuevos objetos.
    Las arrow functions no pueden ser utilizadas como constructores y lanzarán un error si se intenta hacerlo.

  Duplicación de parámetros:
  Las function expressions permiten la duplicación de nombres de parámetros.
  Las arrow functions no permiten duplicar nombres de parámetros y lanzarán un error si se intenta hacerlo.
  */

// Ejercicio 3

class invertirCadena {
  constructor() {
    this.cadenaInvertir = "";
  }

  invertir() {
    if (this.cadenaInvertir === "") {
      throw new Error("La cadena está vacía");
    }
    const cadenaInvertida = this.cadenaInvertir.split('').reverse().join('');
    console.log(cadenaInvertida);
  }
}

invertirCadena = new invertirCadena();

// invertirCadena.cadenaInvertir = "Hola Mundo";
// invertirCadena.invertir(); // Error: La cadena está vacía

// Ejecuta primero la función sin cambiar cadenaInvertir. ¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse?
  // Para evitar que se rompa el código, se puede usar un try/catch para capturar el error y mostrarlo por consola:
      try {
        invertirCadena.invertir();
      } catch (error) {
        console.error(error.message);
      }

// Ahora cambia el valor a cadenaInvertir y vuelve a llamar la función. ¿Cuál es el resultado?
      invertirCadena.cadenaInvertir = "Hola Mundo";

      try {
        invertirCadena.invertir();
      } catch (error) {
        console.error(error.message);
      }
      // El resultado será la cadena "Hola mundo" invertida, que se imprimirá en la consola como "odnum aloH".

// Por último, intenta acceder al siguiente método invertirCadena.nuevoMetodo(). ¿Cómo podemos hacer para que no de un error?
      // Si intentas acceder a un método que no existe en una clase, JavaScript lanzará un error. Para evitar este error, puedes verificar si el método existe antes de intentar llamarlo:
      if (typeof invertirCadena.nuevoMetodo === "function") {
        invertirCadena.nuevoMetodo();
      } else {
        console.log('El método nuevoMetodo no existe en invertirCadena');
      }

// Ejercicio 4
    class Login {
      constructor(username, password) {
        this.username = username;
        this.password = password;
      }

      login() {
        if (this.username === "admin" && this.password === "passwd") {
          alert("User logged in"); // console.log("User logged in");
        } else {
          alert("User or passwd incorrect"); // console.log("User or passwd incorrect");
        }
      }
    }

    let login = new Login("admin", "passwd");
    login.login();

    let logbad = new Login("ivan", "lopez");
    logbad.login();

// Ejercicio 5

    // Espera a que el contenido del DOM esté cargado
    document.addEventListener('DOMContentLoaded', function() {
      // Obtiene los botones por su id
      let loginSuccessButton = document.getElementById('loginSuccess');
      let loginFailureButton = document.getElementById('loginFailure');

      // Añade un clickListener al botón loginSuccess
      loginSuccessButton.addEventListener('click', function() {
        // Crea un objeto Login con credenciales correctas y llama al método login
        let login = new Login('admin', 'passwd');
        login.login();
      });

      // Añade un clickListener al botón loginFailure
      loginFailureButton.addEventListener('click', function() {
        // Crea un objeto Login con credenciales incorrectas y llama al método login
        let login = new Login('pepe', 'bad');
        login.login();
      });
    });
/*

*/
// Ejercicio 6

    let loginWitUsername = (username, password) => {
        return new Promise(function (resolve, rejected) {
          setTimeout(() => {
            if (username === "admin" && password === "passwd") {
              resolve("User logged in");
            } else {
              rejected("Error: invalid username or password");
            }
          }, 200);
        });
    };

    document.addEventListener('DOMContentLoaded', function() {
      // Obtiene los botones por su id
      let loginSuccessAsyncButton = document.getElementById('loginSuccessAsync');
      let loginFailureAsyncButton = document.getElementById('loginFailureAsync');
    
      // Añade un clickListener al botón loginSuccessAsync
      loginSuccessAsyncButton.addEventListener('click', async () => {
        try {
          let result = await loginWitUsername("admin", "passwd");
          alert(result + ' ' + loginSuccessAsyncButton.id);
        } catch (error) {
          alert(error + ' ' + loginSuccessAsyncButton.id);
        }
      });
    
      // Añade un clickListener al botón loginFailureAsync
      loginFailureAsyncButton.addEventListener('click', async () => {
        try {
          let result = await loginWitUsername("pepe", "bad");
          alert(result + ' ' + loginFailureAsyncButton.id);
        } catch (error) {
          alert(error + ' ' + loginFailureAsyncButton.id);
        }
      });
    });