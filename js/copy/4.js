let obj = {
    name:'啊伟',
    age:18,
    like:{
        type:'coding'
    },
    a:undefined,
    b:null,
    c:function(){},
    e:Symbol('Hello'),
    d:{
        n:100
    }
}
obj.c = obj.d
obj.d.m = obj.c


let newObj = JSON.parse(JSON.stringify(obj))
// obj.like.type = 'eating'
console.log(newObj);
// console.log(JSON.parse(JSON.stringify(obj)));

