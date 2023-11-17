// let arr = ['a', 'b', 'c', 'd', 'e']

// for(let e of arr){
//     console.log(e);
// }

let obj = {
    name:'啊伟',
    age:18,
    like:{
        type:'coding'
    }
}

//for...of 遍历有迭代器属性的对象
// for(let key of obj){
//         console.log(key);
//     }

//for...in 遍历所有
// for(let key in obj){
//     console.log(obj[key]);
// }


let data = Object.create(obj)
data.sex = 'boy'
// for in 可以遍历对象隐式原型上的属性
for(let key in data){
    if(data.hasOwnProperty(key)){ //判断data对象中是否显示具有key这个属性
        console.log(key);
    }
}