let str = 'aba'


var validPalindrome = function(s) {
    const len = s.length
    let i = 0
    let j = len - 1
    while(i < j && s[i] === s[j]){
        i++
        j--
    }

    //尝试跳过 i ，或者 j 后新字符串是否是回文
    if(isPalindrome(i + 1, j)){
        return true
    }
    if(isPalindrome(i, j - 1)){
        return true
    }

    function isPalindrome(op,ed){
        while(op < ed ){
            if(s[op] !== s[ed]){
                return false
            }
            op++
            ed--
        }
        return true
    }
    return false
};




console.log(isPalindrome(str));

