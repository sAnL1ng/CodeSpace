// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

var groupAnagrams = function(strs) {
    const map = new Map();
    for(let str of strs){
        let arr = Array.from(str);
        arr.sort();
        let key = arr.toString();
        let list = map.get(key) ? map.get(key) : new Array(); // 如果map中没有key，则创建一个key，并将value设为一个数组
        list.push(str);
        map.set(key,list)
    }
    return Array.from(map.values())
};

console.log(groupAnagrams(strs));