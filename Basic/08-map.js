// Declaracion

// Cual es la diferencia entre un set y un map?
// Un map tiene pares clave-valor
// Un map tiene metodos como set, get, delete, has, clear, size
// Un map tiene metodos como keys, values, entries
// Un map tiene un orden de insercion


let myMap = new Map()
// Inicializacion
myMap = new Map([['name', 'Marcos'], ['correo', 'marcoska@'], ['age', '22']])
console.log(myMap)

// Metodos y Propiedades
// La clave no se puede repetir, si se repite se sobreescribe
// La clave puede ser cualquier tipo de dato


// Agregar un elemento
myMap.set('phone', '123456789') 
console.log(myMap)
// Obtener un elemento por clave
myMap.get('name') // retorna el valor de la clave

// Eliminar un elemento por clave
myMap.delete('phone') // retorna true si se elimino, false si no
console.log(myMap)

// Verificar si un elemento existe
console.log(myMap.has('phone')) // retorna true si existe, false si no

myMap.keys() // retorna un iterable con las claves
myMap.values() // retorna un iterable con los valores
myMap.entries() // retorna un iterable con los pares clave-valor
// que es un iterable?
// Un iterable es un objeto que tiene un metodo llamado next que retorna un objeto con dos propiedades
// value: el valor actual
// done: un booleano que indica si ya se recorrio todo el iterable


// Limpiar el map
myMap.clear()
console.log(myMap)

// Tamaño del map(Propiedad)
console.log(myMap.size)

