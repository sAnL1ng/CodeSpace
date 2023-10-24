// var obj = {
//     a : 1,
//     b : 2,
//     c : 3
// }
// with(obj){
//     a = 2,
//     b = 3,
//     c = 4
// }
// console.log(obj);

function foo(obj){
    with(obj){
      c = 1
    }
  }
  let obj = {
    a : 1
  }
  foo(obj)
  console.log(c); 