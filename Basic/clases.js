// Clases

// Son plantillas de objetos
// Definen propiedades y metodos

// Se usa upper camel case
class Person {


    // Metodo constructor
    constructor(name, age, city) {
        this.name = name
        this.age = age
        this.city = city
    }

    // Metodo Estatico
    walk() {
        console.log('The person is walking')
    }

    // Metodo Dinamico
    // Se puede acceder a las propiedades de la clase
    // Se usa la palabra reservada this
    talk() {
        console.log(`The person is talking. His name is ${this.name}`)
    }

    sayHelloToPerson(nameOfPerson) {
        console.log(`The person says hello to ${nameOfPerson}`)
    }

    doCoffee(coffee, milk) {
        return coffee + milk
}

// Instanciar una clase

let person = new Person('John', 30, 'New York')

// Acceder a las propiedades de la clase
console.log(person.name)

// Modificar las propiedades de la clase  
person.name = 'Mary'

// Acceder a los metodos de la clase

person.walk()

person.sayHelloToPerson('Mary')

// Clase que tiene valores por defecto
class PersonDefault {

    // Tipos de propiedades
    // Propiedades publicas (se pueden acceder desde fuera de la clase) name
    // Propiedades privadas (se pueden acceder solo desde dentro de la clase)  #name
    // Propiedades protegidas (se pueden acceder desde la clase y sus subclases) _name
    constructor(name = 'John', age = 30, city = 'New York') {
        this.name = name
        this.age = age
        this.#city = city
    }

    work() {
        console.log('The person is working')
    }

    // Para poder acceder a una propiedad privada, se debe hacer de la siguiente manera
    getCity() {
        return this.#city
    }

    
}

// Herencia de Clases

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        console.log('The animal is eating')
    }
}

class Dog extends Animal {
    constructor(name, age, color) {
        super(name, age)
        this.color = color
    }

    bark() {
        console.log('The dog is barking')
    }
}