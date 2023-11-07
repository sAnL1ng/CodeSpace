let words = ["are","amy","u"], left = 0, right = 2

var vowelStrings = function(words, left, right) {
    let count = 0
    let myMap = new Map()
    myMap.set('a',1)
    myMap.set('e',2)
    myMap.set('i',3)
    myMap.set('o',4)
    myMap.set('u',5)
    for(let i = left;i <= right; i++){
        let str = words[i]
        let len = str.length
        if(myMap.has(str[0]) && myMap.has(str[len - 1])){
            count++;
        }
    }
    return count
};