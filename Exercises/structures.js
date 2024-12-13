
// Se crea un array de animales
animal = ['leon','lobo','cacatua','elefante', 'tigre']
// Imprime el primer animal
console.log(animal[0])
console.log(animal)
// Agrega un animal al final del array
animal.push('jirafa')
// Agrega un animal al comienzo del array
animal.unshift('perro')
console.log(animal)

// Elimina el elemento en la posicion 2
animal.splice(2,1)
console.log(animal)

//  Se crea un set de animales
myAnimalSet = new Set(['leon','lobo','cacatua','elefante', 'tigre'])
console.log(myAnimalSet)
// Agrega un animal al set
myAnimalSet.add('jirafa')
myAnimalSet.add('leon')
console.log(myAnimalSet)
// Elimina un animal del set
myAnimalSet.delete('leon')

// Se crea un map de meses
myYear = new Map([['enero', 31], ['febrero', 28], ['marzo', 31], ['abril', 30], ['mayo', 31], ['junio', 30], ['julio', 31], ['agosto', 31], ['septiembre', 30], ['octubre', 31], ['noviembre', 30], ['diciembre', 31]])
console.log(myYear)

// Se imprime la cantidad de dias de mayo
if (myYear.get('mayo')){
    console.log('mayo tiene 31 dias')
}
// Los meses agrupados por estaciones
miEstaciones = new Map([['primavera', ['marzo', 'abril', 'mayo']], ['verano', ['junio', 'julio', 'agosto']], ['otoño', ['septiembre', 'octubre', 'noviembre']], ['invierno', ['diciembre', 'enero', 'febrero']]])

console.log(miEstaciones)