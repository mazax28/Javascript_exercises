  
//  La primera forma de hacerlo es un con try catch
let myObject
// Esto nos ayuda a que el codigo nunca se detenga
try {
    // Codigo que intenta ejectutar, pero si que se produce un error va al catch
    console.log(myObject.name)
}
catch{
    // Cuando se produce un error se ejecuta este codigo
    console.log('There was an error') 

}

// Se puede capturar el error y mostrarlo
try{
    console.log(myObject.name)
}
catch(error){
    console.log('Se ha producido un error' + ' ' + error.message)
}

// Ahora el tercer bloque finally
// Esto se usa para cuando queremos que un codigo se ejecute siempre no importa si hay un error o no

try{
    console.log(myObject.name)
}
catch(error){
    console.log('Se ha producido un error' + ' ' + error.message)
}
finally{
    console.log('This code will always run')
}