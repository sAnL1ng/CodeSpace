// var a = 1
// function foo (){
//     console.log(this.a);
// }
// foo()

// function foo() {
//     var a = 2;
//     bar()
// }

// var b = 1

// function bar() {
//     console.log(this.b);
// }

// bar()
var b = 2
function foo() { // [[scope]]
    var b = 1
    bar()
}

function bar() {
    baz()
}
function baz(){
    console.log(this.b);
}
foo()

