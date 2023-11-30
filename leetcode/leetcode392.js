let s = "abc", t = "ahbgdc"
var isSubsequence = function(s, t) {
    return  t.indexOf(s) !== -1;
}
console.log(isSubsequence(s,t));
