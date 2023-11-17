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
    let objCopy = {}
    for(let key in obj) {
        if(obj.hasOwnProperty(key)){
        if(obj[key] instanceof object){ // obj[key]是不是引用类型
            objCopy[key] = deepCopy(obj[key])
        }else{
            objCopy[key] = obj[key]
        }
    }
}
    return objCopy
}
