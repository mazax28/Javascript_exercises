
let myName = 'mi nombre es Juan'
console.log(myName)

// Concatenacion de cadenas
let greeting = 'Hola, ' + myName

// Longitud
console.log(greeting.length)
// Acceso a un caracter
console.log(greeting[0])

// Metodos
console.log(greeting.toUpperCase()) // Retorna la cadena en mayusculas
console.log(greeting.toLowerCase()) // Retorna la cadena en minusculas
console.log(greeting.includes('Juan')) // Retorna true si la cadena contiene la subcadena
console.log(greeting.indexOf('Juan')) // Retorna la posicion de la primera ocurrencia de la cadena
console.log(greeting.lastIndexOf('Juan')) // Retorna la posicion de la ultima ocurrencia de la cadena
console.log(greeting.charAt(0)) // Retorna el caracter en la posicion indicada
console.log(greeting.slice(0, 5)) // Retorna una subcadena desde la posicion inicial hasta la final
console.log(greeting.replace('Hola', 'Hello')) // Retorna una subcadena desde la posicion inicial hasta la final
let subcandenas = greeting.split(' ') // Retorna un array con las palabras de la cadena


// Templates literales

// Interpolacion de variables
let template = `Hola, ${myName}`
console.log(template)
 