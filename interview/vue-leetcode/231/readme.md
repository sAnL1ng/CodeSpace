// DP
var lengthOfLIS = function (nums) {
    let n = nums.length
    if (n == 0) return 0
    // dp[i] i个数字最长递增子序列
    // 自身
    let dp = new Array(n).fill(1)
    // 迭代顺序
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            // 递增子区间
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
};

// 二分查找
const lengthOfLIS = function(nums) {
    let len = nums.length
    if (len <= 1) {
        return len
    }
    let arr = [nums[0]]
    for (let i = 0; i < len; i++) {
        // nums[i] 大于 arr 尾元素时，直接追加到后面，递增序列长度+1
        if (nums[i] > arr[arr.length - 1]) {
            arr.push(nums[i])
        } else {
            // 否则，查找递增子序列中第一个大于numsp[i]的元素 替换它
            // 递增序列，可以使用二分查找
            let left = 0
            let right = arr.length - 1
            while (left < right) {
                let mid = (left + right) >> 1
                if (arr[mid] < nums[i]) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
            // 此时left指向的就是要替换的位置
            arr[left] = nums[i]
        }
    }
    return arr.length
};