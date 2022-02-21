function hola(nombre){
    return new Promise(function (resolve,reject){
        setTimeout(function (){
            console.log(`Hola, ${nombre}`);
            resolve(nombre);
        },1000)
    });
}

function hablar (nombre) {
    return new Promise ((resolve,reject)=>{
        setTimeout(function() {
            console.log('bla bla bla bla ....')
            resolve(nombre);
            reject("error1")
        },1000)
    })
}

function adios(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function (){
            console.log('Adios '+nombre);
            resolve();
        },1000);
    })
}

// ---

console.log("Iniciando el proceso......")

hola('Antonio')
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log("terminando el proceso....")
    })
    .catch(error =>{
        console.error('ha habido un error : ');
        console.error(error)
    })