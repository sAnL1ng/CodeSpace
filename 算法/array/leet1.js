var nums = [2,7,11,15],target = 9


// var twoSum = function(nums, target) { 
//     for(var i=0;i<nums.length;i++){
//         for(var j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]==target){
//                 return[i,j]
//             }
//         }
//     }
// };

// var twoSum = function(nums,target){
//     for(var i = 0;i<nums.length;i++){
//        var res =  target - nums[i]
//        var j = nums.indexOf(res)
//        if(i !== j && j !== -1){
//         return [i,j]
//        }
//     }
// }

var twoSum = function(nums,target){
    var diffs = {}
    for(var i = 0;i < nums.length;i++){
        if(diffs[target - nums[i]]!== undefined){
            return [diffs[target - nums[i]],i]
        }
        diffs[nums[i]] = i
    }
}

console.log(twoSum(nums,target));