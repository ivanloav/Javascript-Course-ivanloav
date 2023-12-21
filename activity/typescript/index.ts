// Ejercicio 1

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4
// Ejercicio 1
interface Person {
    name: string;
    age: number;
    profession: string;
}

const personToArray = (person: Person): (string | number)[] => {
    return [person.name, person.age, person.profession];
}

let person: Person = {
    name: "Iván",
    age: 35,
    profession: "IT Manager"
};

let result = personToArray(person);

console.log(result);

// Ejercicio 2

function sumOrConcatenate(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + '-' + b;
    } else {
        return a + ':' + b;
    }
}

// Pruebas de la función
console.log(sumOrConcatenate(4, 3)); // --> 7
console.log(sumOrConcatenate(4, "hello")); // --> 4:hello
console.log(sumOrConcatenate("hello", "world")); // --> hello-world

// Ejercicio 3

interface Car {
    tires: number;
    turnOnEngine(): void;
    pressPedal(): void;
}

interface Motorcycle {
    tires: number;
    turnOnEngine(): void;
    openThrottle(): void;
}

function isCar(vehicle: Car | Motorcycle): vehicle is Car {
    return (vehicle as Car).pressPedal !== undefined;
}

function operateVehicle(vehicle: Car | Motorcycle): void {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    } else {
        (vehicle as Motorcycle).openThrottle();
    }
}

const car: Car = {
    tires: 4,
    turnOnEngine: () => console.log("Car engine turned on"),
    pressPedal: () => console.log("Car pedal pressed")
};

const motorcycle: Motorcycle = {
    tires: 2,
    turnOnEngine: () => console.log("Motorcycle engine turned on"),
    openThrottle: () => console.log("Motorcycle throttle opened")
};

operateVehicle(car); // Debería encender el motor y luego presionar el pedal
operateVehicle(motorcycle); // Debería encender el motor y luego abrir el acelerador

// Ejercicio 4

function removeFirstEntry<T extends string | number>(array: T[]): T[] {
    return array.slice(1);
}

// Ejemplos de uso
const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);

console.log(newStrArray); 
console.log(newNumArray); 
console.log(newMixedArray); 

// La siguiente línea fallará en tiempo de compilación, como se espera
// const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];
// const newUnsupportedArray = removeFirstEntry(unsupportedArray);
