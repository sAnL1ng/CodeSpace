let obj = {
    name:'啊伟',
    age:18,
    like:{
        type:'coding'
    }
}
// 循环引用
// obj.c=obj.d
// obj.d.m=obj.c
function deepCopy(obj) {
    if(typeof obj !== 'object' || obj == null) return
    let objCopy = obj instanceof Array ? []:{}
    for(let key in obj) {
        if(obj.hasOwnProperty(key)){
        if(obj[key] instanceof Object){ // obj[key]是不是引用类型
            objCopy[key] = deepCopy(obj[key]) //对obj[key]进行深拷贝然后返回给objCopy[key]
        }else{
            objCopy[key] = obj[key]
        }
    }
}
    return objCopy
}

let newObj = deepCopy(obj)
obj.like.type = 'fishing'

console.log(newObj);   
