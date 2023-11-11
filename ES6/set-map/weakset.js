let obj = {name:'德玛西亚'}

let ws = new WeakSet()
ws.add(obj)
obj = null

console.log(ws); //{}
