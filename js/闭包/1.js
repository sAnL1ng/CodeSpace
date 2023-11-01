var arr = []

//  for(var i = 0; i < 10 ; i++) {  // 用var 声明变量i , i的作用域是全局,用let声明词法作用域变为块级作用域
//     arr[i] = function(){
//         console.log(i);
//     }
// }

for(var i = 0; i < 10; i++) {

    (function a(j){
        arr[i] = function(){
            console.log(j);
        }
})(j)
}


// ----------
for(var j = 0; j < arr.length; j++) {
    i = j
    arr[j]()
}