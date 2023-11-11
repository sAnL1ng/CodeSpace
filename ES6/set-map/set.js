// let arr = [1,1,2,3,3]
// let obj = {}

// let set = new Set([1,1,2,2,3,4])
// set.add(5)
// console.log(set.size);

// 数组去重(原始类型)
// var arr = [1,1,2,2,3,"1"]

// function unique(arr){
//     // return Array.from(new Set(arr))
//     return [...new Set(arr)]
// }

// var unique = (arr) => [...new Set(arr)]
// console.log(unique(arr));

// let set = new Set([1,1,2,2,3,4])
// set.clear()
// console.log(set);

// let set = new Set([1,1,2,2,3,4])
// set.delete(1)
// console.log(set);

// set.forEach((item,index,set) => {
//     console.log(item,index,set);
// })

// console.log(set.has(6));


let set = new Set([1,1,2,2,3,4])
for(let item of set.values()) {
    console.log(item);
}