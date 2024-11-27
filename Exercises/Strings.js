
// CONCATENA DOS CADENAS DE TEXTO
let name = 'Juan'
let lastName = 'Perez'
let fullName = name + ' ' + lastName
console.log(fullName)

// 

console.log(fullName.length)

console.log(fullName[0])
console.log(fullName[fullName.length - 1])

console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(`Hola mi nombre es, ${fullName}`)

let newFullName = fullName.replace(' ', '-')
console.log(newFullName)

console.log(fullName.includes('Juan'))

fullName == 'Juan Perez' ? console.log('Hola Juan') : console.log('Hola desconocido')
fullName.length > 10 ? console.log('Tu nombre es muy largo') : console.log('Tu nombre es muy corto')