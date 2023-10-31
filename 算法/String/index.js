// let str = 'abcdefg'


// 读取字符串身上的值
// str[2] = 'C' 
// console.log(str.charAt(2));
// console.log(str.concat('mn'));
// console.log(str + 'mn');

// let arr = str.split('')
// arr.splice(4,3)
// console.log(arr);
// let str2 = arr.join('=>')
// console.log(str2);

// let str = '2023年10月31日' // 2023/10/31

const str = 'yesey'
function ispalindrome(s){
    const stack = []
    for(let i = 0; i < str.length; i++) {
        stack.push(str[i])
}
for(let i = 0; i < str.length; i++) {
    if(s[i] !== stack.top){
        return false
    }
}
return true
}
ispalindrome(str)
