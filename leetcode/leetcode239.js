var nums = [1,3,-1,-3,5,3,6,7]

// var maxSlidingWindow = function(nums, k) {
//     let left = 0
//     let right = k - 1
//     let res = []

//     while(right < nums.length){
//         const max = calMax(right,left)
//         res.push(max)
//         left++
//         right++
//     }


//     function calMax(x,y) {
//         let maxNum = -Infinity
//         for(let i = x;i <= y;i++){
//             if(nums[i] > maxNum){
//                 maxNum = nums[i]
//             }
//         }
//         return maxNum
//     }

//     return res
// };

function maxSlidingWindow(){
    // 在窗户移动的过程中，只根据发生变化的元素对最大值进行更新
    
}


console.log(maxSlidingWindow(nums,3));