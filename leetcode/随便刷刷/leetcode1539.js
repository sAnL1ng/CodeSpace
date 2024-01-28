let arr = [2, 3, 4, 7, 11]


var findKthPositive = function (arr, k) {
    let num = arr[arr.length - 1]
    let newArr = []
    for(let i = 1 ; i <= num + k ; i++) {
        newArr.push(i)
        if(arr.includes(i)){
            newArr.pop()
        }
    }
    return newArr[k-1]
};

console.log(findKthPositive(arr,5));