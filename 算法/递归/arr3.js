// var arr = [1, 2, 3, 4, 5, 6, 7]

// var sum = arr.reduce(
//     function(pre,item,index,arr){
//         return pre + item
// },0)

// console.log(sum);

var arr = [1,[2,[3,4]]]

function flaten(arr){
    return arr.reduce(function(pre,item){
        return pre.concat(Array.isArray(item) ? flaten(item) : [item])
    },[])
}

console.log(flaten(arr)); 