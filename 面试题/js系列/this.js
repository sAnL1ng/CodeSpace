let a = 1

function bar() {
    function foo() { // foo的词法作用域是bar
        console.log(this.a);
    }
}

foo()