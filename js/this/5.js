function foo(){
    var a = 1

    var bar = function(){
        console.log(this.a);
    }
    setTimeout(bar,1000)
}
foo()