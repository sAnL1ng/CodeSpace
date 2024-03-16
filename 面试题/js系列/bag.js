let obj = {}

function foo() {
    let a = 1
    let b = 2
    let c = 3

    obj.bar = function () {
        console.log(a,b);

        a = null;
        b = null;
    }
}

foo()
obj.bar()