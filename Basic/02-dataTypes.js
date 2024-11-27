// Tipos de datos primitivos en JavaScript
// En Javascript existe 7 tipos de datos primitivos;

// String: cadena de texto
const thisIsAString = 'Hello, World!'
console.log(typeof thisIsAString ,thisIsAString)

// Number: número
const thisIsANumber = 42;
console.log(typeof thisIsANumber ,thisIsANumber)

// Boolean: true o false
const thisIsABoolean = true
const thisIsABoolean2 = false
console.log('Boolean:',thisIsABoolean)

// undefined: significa que ya se ha sido declarado pero no se le ha asignado un valor
const thisIsUndefined = undefined
console.log(typeof thisIsUndefined,thisIsUndefined)

// null: significa que la variable no tiene valor
// es un objeto 
const thisIsNull = null;
console.log('null:',thisIsNull)

// es un objeto 
let mySymbol = Symbol('mySymbol')
console.log('Symbol:',mySymbol)
// Para obtener la descripción de un Symbol
console.log('Symbol:',mySymbol.description)


// BigInt: números enteros mayores que 2^53 - 1
const thisIsABigInt = 9007199254740991
console.log('BigInt:',thisIsABigInt)
