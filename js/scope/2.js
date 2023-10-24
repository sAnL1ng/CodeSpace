function foo(str,a){
     eval(str)//var b = 3 欺骗词法作用域
     console.log(a,b);
    }
    foo('var b = 3',1)