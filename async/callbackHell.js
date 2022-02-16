let Nombre = "Jose";

function hola(nombre,miCallback){
    setTimeout(function (){
        console.log("Hola, "+nombre);
        miCallback();
    },1000)
}

function hablar (callbackHablar) {
    setTimeout(function() {
        console.log('bla bla bla bla ....')
        callbackHablar();
    },1000)
}

function adios(nombre,otroCallback){
    setTimeout(function (){
        console.log('Adios',nombre);
        otroCallback();
    },1000);
}

function conversacion (nombre,veces,callback){
    if(veces > 0){
        hablar(function (){
            conversacion(Nombre, --veces,callback);
        })
    }else{
        adios(nombre, callback);
    }
}
 //--
console.log("Iniciando proceso")
hola(Nombre,function(nombre){
    conversacion(nombre,3,function(){
        console.log('proceso terminado')
    })
})
// hola(nombre,function (){
//     adios(nombre, function(){
//         console.log("terminamos")
//     });
// });
//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//                 adios('Jose',function(){
//                     console.log('Terminando proceso')
//                 });
//             })
//         })
//     })


