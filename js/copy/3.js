// 浅拷贝实现原理
let obj = {
    name:'啊伟',
    age:18,
    like:{
        type:'coding'
    }
}

// function shalldowCpoy(obj){
//     let objCopy = {}
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             objCopy[key] = obj[key] //不能obj.key 因为会将key读成字符串
//         }
//     }
//     return objCopy
// }

// let newObj = shalldowCpoy(obj)
//age是原始类型 属于深拷贝 拷贝对象数据不改变
// obj.age = 20
// console.log(newObj.age);

let arr = ['a',{n:1},1,undefined,null]


function shalldowCpoy(obj){

    if(typeof obj !== 'object' || obj == null) return //只拷贝引用类型 去除number和null类型
    let objCopy = obj instanceof Array ? []:{}

    for(let key in obj){
    if(obj.hasOwnProperty(key)){
     objCopy[key] = obj[key] //不能obj.key 因为会将key读成字符串
        }
    }
    return objCopy
}

let newObj = shalldowCpoy(arr)

console.log(newObj);    

