// Objeto
// Coleccion de propiedades
// Puede tener datos primitivo, objetos, funciones

function myFunction() {
    // code
}
// Crear un objeto
let myObject = {
    name: 'leon',
    age: 12,
    color: 'yellow',
    myFunction: myFunction
}

let myObject2 = {
    name: 'lobo',
    age: 12,
    color: 'gray',
    myObject: myObject,
    walk: function() {
        console.log('The wolf is walking')
    }
}

// Acceder a las propiedades de un objeto

// Notacion de punto
console.log(myObject.name)
// Notacion de corchetes
console.log(myObject['name'])

myObject2.walk()

myObject2.myObject.name

// Modificar propiedades de un objeto

myObject.name = 'tigre'
console.log(myObject.name)
myObject.age = "15"
console.log(myObject.age)

// Agregar propiedades a un objeto

myObject.size = 'big'

// Eliminar propiedades de un objeto

delete myObject.size