const { exec ,spawn } = require('child_process');
const { stdout, stderr } = require('process');
const { func } = require('prop-types');

// exec ('ls -la',(err,stdout,stderr) =>{
//     if(err){
//         console.error(err);
//         return false ;
//     }
//     console.log(stdout);
// })

let process = spawn ('ls',['-la']);

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', function (dato){
    console.log(dato.toString());
})