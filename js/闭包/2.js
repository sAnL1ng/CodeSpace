function foo(){
    var myName = '旭旭'
    let test1 = 1
    let test2 = 2
    var innerBar = {
        getName:function(){
            console.log(test1);
            return myName
        },
        setName: function(newName){
            myName = newName
        }
    }
    return innerBar
}
var bar = foo()
bar.setName('浪哥')
console.log(bar.getName());