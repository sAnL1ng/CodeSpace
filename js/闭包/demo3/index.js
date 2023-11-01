function bar(){
    console.log(myName);    //君君 bar的作用域中找不到myName，然后去bar函数的词法作用域中寻找也就是全局作用域中查找
}

function foo(){
    var myName = '龙龙'
    bar()
}

var myName
 myName = '君君'
foo()