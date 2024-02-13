/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    const res = [];
    const n = num.length;
    for (let i = n - 1; i >= 0; --i) {
        let sum = num[i] + k % 10;
        k = Math.floor(k / 10);
        if (sum >= 10) {
            k++;
            sum -= 10;
        }
        res.push(sum);
    }
    for (; k > 0; k = Math.floor(k / 10)) {
        res.push(k % 10);
    }
    res.reverse();
    return res;
};
