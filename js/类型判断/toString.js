// console.log(
//     Object.prototype.toString.call('Hello')
// )
let s = 'Hello'

function isType(s){
    return Object.prototype.toString.call(s).slice(8,-1)
}

if(isType(s) === 'string'){
    
}