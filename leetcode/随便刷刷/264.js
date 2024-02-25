let n = 10

var nthUglyNumber = function(n) {
    let nums = new Array(1690).fill(0);
    let i2 =0,i3 = 0,i5= 0;
    let ugly = 0;
    nums[0] = 1;
    for(let i = 1; i < 1690; i++) {
        ugly = Math.min(nums[i2]*2,nums[i3]*3,nums[i5]*5);
        nums[i] = ugly;
        if(ugly === nums[i2] * 2) i2++;
        if(ugly === nums[i3] * 3) i3++;
        if(ugly === nums[i5] * 5) i5++;
    }
    return nums[n-1];
};

console.log(nthUglyNumber(n));