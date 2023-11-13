function instanceOf(L,R){
    let left = L.__proto__
    let right = R.prototype
    while(left !== null){
        if(left === right) return true

        left = left.__proto__
    }
    return false
}
console.log(instanceOf([],Array));
console.log(instanceOf([],Object));
