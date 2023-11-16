// new Promise

function bo1(){
    return new Promise((resolve,reject) => {// promiese----ES6新增构造函数
        setTimeout(() => {
            console.log('JDG比赛第一把输了!');
            resolve('比分0:1')
        }, 2000);
    }) 
}

function bo2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('JDG比赛第二把赢了!');
            resolve('比分1:1')
        }, 1000)
    })
}

function bo3(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('JDG比赛第三把输了!');
            resolve('比分1:2')
        }, 500)
    })
}

function bo4(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('JDG比赛第四把输了!');
            resolve('比分:1:3,坐飞机回家了!')
        }, 300)
    })
}

bo1()
.then((res) => {
    console.log(res);
    return bo2()
})
.then(res2 => {
    console.log(res2);
    return bo3()
})
.then(res3 => {
    console.log(res3);
    return bo4()
})
.then(res4 => {
    console.log(res4);
})
