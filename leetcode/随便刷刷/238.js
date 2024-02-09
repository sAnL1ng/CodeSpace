const nums = [1,2,3,4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const res = [];
    res[0] = 1;
  	//从左往右遍历
  	//记录从左到当前位置前一位的乘积
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }

    let right = 1;
  	//从右往左遍历
  	//从左到当前位置前一位的乘积 乘上 右边元素的积
    for (let j = nums.length - 1; j >= 0; j--) {
        res[j] *= right;
        right *= nums[j];
    }

    return res;
};

console.log(productExceptSelf(nums));