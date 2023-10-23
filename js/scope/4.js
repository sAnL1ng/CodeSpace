let a = 1;

function foo(){
    console.log(a);//暂时性死区
    let a = 2;
}

foo()