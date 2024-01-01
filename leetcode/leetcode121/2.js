//  贪心算法（greedy algorithm ，又称贪婪算法）是指，在对问题求解时，总是做出在当前看来是最好的选择。
//  也就是说，不从整体最优上加以考虑，算法得到的是在某种意义上的局部最优解。
//  一言以蔽之，不从整体最优上加以考虑，算法得到的是局部最优解

function maxProfit(prices){
    let min = prices[0]
    let profit = 0
    for(let i = 1; i < prices.length; i++) {
        if(price[i] > prices[i-1]){
            profit = Math.max(prices[i] - min,profit)
        }else{
            min = Math.min(min, prices[i])
        }
    }
    min = Math.min(prices[i-1],min)
}