// - map 遍历 ， callback 返回值 新的数组
// 1  parseInt(1, 0, [1,2,3])   10  1
// 2  parseInt(2, 1, [1, 2, 3])  NaN 
// 3  parseInt(3, 2, [1,2,3])   2  011 NaN
console.log([1,2,3].map(parseInt));