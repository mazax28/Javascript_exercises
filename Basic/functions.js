// Las funciones se crean un cammelCase, es decir, la primera palabra en minuscula y las siguientes en mayuscula.

function myFunction() {
  // code
}

function myFunctionWithParameters(parameter1, parameter2) {
  // code
}

// default parameters
function myFunctionWithDefaultParameters(parameter1 = 0, parameter2 = 0) {
  // code
}

function myFunctionWithReturn() {
  return 'Hello World'
}

function oneLineFunction() { return 'Hello World' }

// Funciine anonima
const myFunction = function() {
  // code
}

// Funcion flecha
const myFunction = () => {
  // code
}

// Funciones anidadas

function extern() {
    function intern() {
        // code
    }
    intern()
    return intern
    }

// Invocar funcione anidada

extern()()

//  Funcion de orden superior

function myFunction(callback) {

    // code
    
    callback()
    
    }


//  forEach

let myArray = ['leon','lobo','cacatua','elefante', 'tigre']

// Que hace forEach
// Recorre un array y ejecuta una funcion por cada elemento del array
myArray.forEach(function(valor, indice, array) {
  console.log(valor, indice, array)
}
)
// Que hace map
// Recorre un array y ejecuta una funcion por cada elemento del array, y devuelve un nuevo array con los resultados de la funcion
let myNewArray = myArray.map(function(valor, indice, array) {
  return valor + '!'
}
)

// que hace filter

// Recorre un array y ejecuta una funcion por cada elemento del array, y devuelve un nuevo array con los elementos que cumplan con la condicion de la funcion
let myFilteredArray = myArray.filter(function(valor, indice, array) {
  return valor.length > 4
}
)

// que hace reduce

// Recorre un array y ejecuta una funcion por cada elemento del array, y devuelve un unico valor que es el resultado de la funcion
let myReducedValue = myArray.reduce(function(acumulador, valor, indice, array) {
  return acumulador + valor
}
)

// que hace some

// Recorre un array y ejecuta una funcion por cada elemento del array, y devuelve true si alguno de los elementos cumple con la condicion de la funcion
let mySomeValue = myArray.some(function(valor, indice, array) {
  return valor.length > 4
}
)

// que hace every

// Recorre un array y ejecuta una funcion por cada elemento del array, y devuelve true si todos los elementos cumplen con la condicion de la funcion    

let myEveryValue = myArray.every(function(valor, indice, array) {

    return valor.length > 4
    
    }

)

// que hace find

// Recorre un array y ejecuta una funcion por cada elemento del array, y devuelve el primer elemento que cumple con la condicion de la funcion
let myFindValue = myArray.find(function(valor, indice, array) {
    return valor.length > 4
    }
)


