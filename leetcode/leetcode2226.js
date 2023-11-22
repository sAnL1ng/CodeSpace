let candies = [5,8,6]

var maximumCandies = function(candies, k) {
    let max = Math.max(candies)
    if(max < k) return 0
    for(let num of candies){
        num +=num
        console.log(num);
    }
};  

maximumCandies(candies, 3)