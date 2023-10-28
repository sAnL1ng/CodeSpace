let stack = []  //只能用数组的push和pop方法 
stack.push('1')
stack.push('2')
stack.push('3')
stack.push('4')
stack.push('5')
stack.push('6')
stack.push('7')
stack.push('8')

// 出栈
while (stack.length){
    const top = stack[stack.length - 1]
    console.log('我正在访问第'+top+'个元素');
    stack.pop()
}