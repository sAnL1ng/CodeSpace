var a = 1

function bar() {
    function foo() { // foo的词法作用域是bar bar的词法作用域是window
        function baz() {
            console.log(this.a);    
        }
        baz()
    }
    foo()
}

bar()

let a = 1

