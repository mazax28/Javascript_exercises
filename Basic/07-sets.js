
// Declaracion
let mySet = new Set()
// Inicializacion
mySet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// Cual es la diferencia entre un set y un array?
// Un set no permite elementos duplicados
// Un set no tiene indices
// Un set no tiene metodos como push, pop, shift, unshift, etc
// Un set tiene metodos como add, delete, has, clear, size

// Metodos
// Agregar un elemento
mySet.add(11) // 
// Eliminar un elemento por valor
mySet.delete(11) // retorna true si se elimino, false si no
// Verificar si un elemento existe
mySet.has(11) // retorna true si existe, false si no
// Limpiar el set
mySet.clear() 
// Tamaño del set(Propiedad)
mySet.size
