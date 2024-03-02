async function foo() {
    try {
        await Promise.resolve();
    }catch(e) {
        console.log(e);
    }
}

console.log(foo()); //promise对象