let candies = [5,8,6]

var maximumCandies = function(candies, k) {
    for(let num of candies){
        num +=num
        console.log(num);
    }
};  

maximumCandies(candies, 3)