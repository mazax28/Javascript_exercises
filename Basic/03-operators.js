
// Operadores aritmeticos

console.log(2+2) //SUMA
console.log(3-2) // RESTA 
console.log(3*2) // MULTIPLICACION
console.log(3/2) // DIVISION
console.log(3%2) // MODULO
console.log(3**2) // POTENCIA

let a = 5
a++ // incremento
console.log(a)
a-- // decremento

// Operadores de asignación
// Asignación simple
let b = 5
// Asignación de adición
b += 3 // b = b + 3
console.log(b)
// Asignación de sustracción
b -= 3 // b = b - 3
console.log(b)
// Asignación de multiplicación
b *= 3 // b = b * 3
console.log(b)
// Asignación de división
b /= 3 // b = b / 3
console.log(b)

// Operadores de comparación
console.log(3 == 3) // igualdad, el valor debe ser igual
console.log(3 == '3') // igualdad el valor debe ser igual
console.log(3 > 3) // mayor que
console.log(3 < 3) // menor que
console.log(3 >= 3) // mayor o igual que
console.log(3 <= 3) // menor o igual que
console.log(3 != 3) // desigualdad
console.log(3 === 3) // estrictamente igual, el valor y el tipo de dato deben ser iguales 
console.log(3 === '3') // estrictamente igual, el valor y el tipo de dato deben ser iguales
console.log(3 !== 3) // estrictamente desigual

// truthy values
// todos los valores postivos menos el cero
// todas las cadena de texto menos las vacias
// el boolean true

// falsy values
// 0
// 0n
// ''
// null
// undefined
// NaN
//
// Operadores lógicos
// AND
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
// OR
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
// NOT
console.log(!true)
console.log(!false)

// Operadores ternarios
const isRainy = true
// si es true imprime 'Lleva paraguas' si es false imprime 'No lleva paraguas'
isRainy ? console.log('Lleva paraguas') : console.log('No lleva paraguas')