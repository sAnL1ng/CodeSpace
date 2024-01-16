// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

const nums = [100,4,200,1,3,2]

var longestConsecutive = function(nums) {
    const set = new Set(nums); // 数组去重 
    let max = 0
    for(let i = 0;i < nums.length;i++){
        if(!set.has(nums[i] - 1)){ // 如果当前数的前一个数不存在 则说明它是起点
            let cur = nums[i];
            let count = 1;
            while(set.has(cur + 1)){ // 如果后一个数存在 则说明它不是起点 则连续的数的长度+1 
                cur++
                count++
            }
            max = Math.max(max,count) // 最大连续数的长度
        }
    }
    return max
};

console.log(longestConsecutive(nums)); // 4