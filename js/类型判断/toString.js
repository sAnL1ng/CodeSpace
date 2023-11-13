// console.log(
//     Object.prototype.toString('Hello')
// )
let s = 'Hello'

function isType(s){
    console.log(Object.prototype.toString.call(s).slice(8,-1)); 
}
isType(s)
// if(isType(s) === 'string'){
    
// }
let nu = null
console.log(typeof(nu));