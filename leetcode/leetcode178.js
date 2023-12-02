var actions = [86,38,67,65,61,72,42,1,17,88,65,72,64,54,22,45,92,1,38,17,3,68,34,64,29,27,6,22,54,56,34,61,38,92,48,82,73,62,86,27,11,6,22,98,86,37,15,61,88,29,73,15,62,1,6,67,11,72,16,87,67,62,42,16,45,98,7,27,87,37,16,56,88,64,15,68,42,98,29,82,65,82,54,7,17,68,92,45,37,87,56,11,48,34,7,48,73]

var trainingPlan = function(actions) {
    let res = 0
    let newArr = []
    let arr2 = new Array(32).fill(0)
    for(let i of actions){
       res += (Number(((i >>> 0).toString(2))))
    }
    let arr = Array.from(res.toString().split(''))
    for(let i of arr){
        newArr.push(i % 3)
    }
    return parseInt(newArr.join(''),2)

};

console.log(trainingPlan(actions));