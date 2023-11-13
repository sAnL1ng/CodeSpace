//介绍异步

//如果异步执行则会先输出b 
function a(cb){
    setTimeout(() => { //模拟请求响应耗时 其中耗时取决于网速快慢
        console.log("阿臻");
    },1000)
    cb() //问：cb没有执行完毕之前，a算不算执行完毕？
}

function b(){ //假设函数b执行的结果依赖函数a执行的结果  
    //console.log("阿强");
    setTimeout(() => {
        console.log("10亩地");
    }, 0);
}

a(b)


