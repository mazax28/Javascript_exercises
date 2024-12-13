 
//  Declaracion
let myArray = [1, 2, 3, 4, 5]
let emptyArray = []
let mixedArray = [1, 'Juan', true, 3.14]

console.log(myArray)
console.log(emptyArray)
console.log(mixedArray)

// Inicializar un array con una longitud
let myArray2 = new Array(5)

// Agregar un elmentos
myArray.push(6) // Agrega un elemento al final 
myArray.push(7, 8) // Agrega varios elementos al final

myArray.shift() // Elimina el primer elemento, y devuelve el elemento eliminado
myArray.unshift(0) // Agrega un elemento al principio

myArray.pop() // Elimina el ultimo elemento, y devuelve el elemento eliminado

// Para borrar el contenido del array
myArray = []

// Separar  un sub array
let subArray = myArray.slice(1, 3) // Retorna un subarray desde la posicion inicial hasta la final

// Concatenar arrays
let newArray = myArray.concat(subArray)

// splice
// Elimina elementos de un array y opcionalmente los reemplaza
// splice(posicion, cantidad, elementos a agregar)
let removed = myArray.splice(1,4) // Elimina 4 elementos a partir de la posicion 1
console.log(removed)
