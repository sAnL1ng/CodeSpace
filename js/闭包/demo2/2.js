var a = 2
function add(b,c) {
    return b + c
}
function addAll(b,c){
    var d = 10
    result = add(b,c)
    return a + result + d //2+9+10
}
addAll(3,6)