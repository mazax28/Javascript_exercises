
let myArray = [1,2,3,4]

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

let person_complex = {
    name: 'John',
    age: 30,
    city: 'New York',
    address: {
        street: 'Main St',
        number: 123
    }
}

// Destructuring
let [a, b, c, d] = myArray
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3
console.log(d) // 4

// Solo se les puede dar un valor por defecto a las variables que no existen
let [e=0, f=0, g=0, h=0] = myArray

// Si queremos ignorar un valor, se puede hacer de la siguiente manera
// Se deja un espacio vcio
let [i, , j, k] = myArray

// Solo se puede hacer destructuring de objetos con sus nombres
let {name,age,city} = person

// Pero hay una forma de hacer destructuring con nombres diferentes
let {name:name1,age:age1,city:city2} = person

// Esta es la forma de destructuring de objetos anidados
let {name:name2,age:age2,city:city3,address: {street: street_name}} = person_complex

console.log(street_name )

// Spreading
//  Operador de propagacion o expansion ...
// Lo que se hace es expandir los elementos de un array u objeto, para poder utilizarlos en otro array u objeto

let newArray = [...myArray]


let myArray2 = [...myArray, 5, 6, 7]
console.log(myArray2.length)

let myArray3 = [0, ...myArray, 5, 6, 7]
console.log(myArray3.length)

// Combinacion de array
let arrayCombined = [...myArray, ...myArray2]

// Spreading de objetos
 
let newPerson ={...person}

let person2 = {...person,hobbie: 'soccer',dni: 12345678}