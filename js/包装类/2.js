let obj = {
    name: '丁总', /*字符串：字符串*/ 
    age:18
}
// console.log(obj['name']);
// obj.girlFriend = '翠花'
let girl = 'girlFriend'
obj[girl] = '小红' /*增*/ 

delete obj.girlFriend //移除对象中的girlFriend属性

console.log(obj);