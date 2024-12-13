
// Estruturas de control

// Estructuras de doble via
let age = 18 
if (age > 18) {
    console.log('Eres mayor de edad')
}
else if (age == 18) {
    console.log('Tienes 18 años')
}
else {
    console.log('Eres menor de edad')
}

// Operador ternario
age > 18 ? console.log('Eres mayor de edad') : console.log('Eres menor de edad')
// Tambien se puede asignar a una variable
const message = age > 18 ? 'Eres mayor de edad' : 'Eres menor de edad'

//  Switch
// Se usa para comparar una variable con multiples valores
let day = 3

switch (day) {
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
    case 3:
        console.log('Miercoles')
        break
    default:
        console.log('Dia no valido')
}