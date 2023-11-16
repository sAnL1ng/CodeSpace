let num1 = "123", num2 = "456"
var multiply = function(num1, num2) {
    let arr1 = [],arr2 = []
    let sum = []
    let add = []
    arr1.push(num1)
    arr2.push(...num2)
    console.log(arr1, arr2);
    for(let i = arr2.length - 1; i >= 0; i--){
        sum.push(arr1[0] * arr2[i])
    }
    console.log(sum);
    for(let i = 0 ; i < sum.length ; i++){
        add.push(sum[i] * (10 **(i)))
    }
    console.log(add);
    let end = 0
    for(let i = 0; i < add.length ; i++){
        end += add[i]
    }
    
    add.fill(0).push(end)
    console.log(add[add.length - 1]);
};
multiply(num1, num2)