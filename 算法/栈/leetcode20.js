let s = '{[()]}'  // true
var isValid = function(s){
    let len = s.length;
    const obj = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    // if(len%2 !== 0) return false
    const stack = []
    for(let i = 0; i < len; i++){
        const item = s[i]
        if(item === '(' || item === '{' || item === '['){
            stack.push(item)
        }else{
            //判断此时的item 是否适配栈顶元素
            // 将栈顶元素取出作为obj的key读取到其value 判断该value是否等于item
            if(!stack.length || obj[stack.pop()] ){
                return false
            }
        }
    }
    return !stack.length
}
isValid(s)