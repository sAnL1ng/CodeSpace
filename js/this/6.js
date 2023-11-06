// function foo () {

// }

// var a = 1

// var bar = function(){
//     console.log(this.a);
// }
// bar()


// var baz  = () => {
//     console.log(this.a);
// }
// baz()

var obj = {
    name : 'TOM',
    show: function(){
        // console.log(this);

        var bar = () => {
            console.log(this.name);
        }
        bar()
    }
}
obj.show()