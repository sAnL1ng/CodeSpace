function fn(a){
    console.log(a);
    var a = 123
    console.log(a);
    var b = function(){}
    console.log(a);
    var b = function(){}
    console.log(b);
    function d(){}
    var d = a 
    console.log(d);
}
// AO: {
//     a: undefined  
//     b: undefined
//     d: undefined
// }
fn(1)