// new Promise

function xq(){
    return new Promise((resolve,reject) => {// promiese----ES6新增构造函数
        setTimeout(() => {
            console.log('龙哥相亲了！');
            resolve('相亲成功')
        }, 2000);
    }) 
}

function marry(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('龙哥结婚了！');
            resolve('结婚完成')
        }, 1000)
    })
}

function baby(){
    setTimeout(() => {
        console.log('小龙女出生');
    }, 500);
}

function baby2(){
    setTimeout(() => {
        console.log('小龙2出生');
    }, 300);
}

xq()
.then((res) => {
    console.log(res);
   return marry()
})
.then(res2 => {
    console.log(res2);
    baby()
})
