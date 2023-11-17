// 栈
// arr push  pop 

// 队列 弱化版本arr
let queue = []  //只能用push和shift FIFO

queue.push['宫保鸡丁']
queue.push['辣椒炒辣椒']
queue.push['红烧肉']

while(queue.length){
    const top = queue.shift()
    console.log(top);
}
