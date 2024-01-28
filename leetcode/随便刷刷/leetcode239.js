var arr = [1,3,-1,-3,5,3,6,7]

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

function maxSlidingWindow(nums,k){
    // 在窗户移动的过程中，只根据发生变化的元素对最大值进行更新
    const len = nums.length
    const res = []
    const deque = []
    for(let i = 0; i < len; i++){
        
        while(deque.length && nums[deque[deque.length - 1]] <= nums[i]){
            deque.pop()
        } 

    if(deque[0] <= i - k){
            deque.shift()
    }
    deque.push(i)
    if(i >= k - 1){
        res.push(nums[deque[0]])
    }
    }
    return res
}


console.log(maxSlidingWindow(arr,3));