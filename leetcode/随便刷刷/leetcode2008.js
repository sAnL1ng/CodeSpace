/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function (n, rides) {
    rides = rides.sort((a, b) => a[1] - b[1]);

    let dp = new Array(n + 1).fill(0);

    let index = 0;
    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
        dp[i] = dp[i - 1];

        while ((index < rides.length) && (i == rides[index][1])) {
            dp[i] = Math.max((dp[rides[index][0]] + rides[index][1] - rides[index][0] + rides[index][2]), dp[i - 1], dp[i]);
            index++;
        }
    }
    return dp[dp.length - 1];
};

