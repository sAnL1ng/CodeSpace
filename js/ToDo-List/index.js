// 监听用户敲击enter
var input=document.getElementById("list-input")
var ul=document.getElementById("list")

// input.onkeyup=function(e)   
// {
//     if(e.keyCode===13)
//     {
// //读取input框内的值
//     input.value
//     console.log(input.value)
// //生成一个li结构
// //将input中的值添加到li中
    // var todoList=`
    // <li>
    //     <input type="checkbox">
    //     <span>${input.value}</span>
    // </li>
    // `
    // 将li添加到ul中
    // ul.insertAdjacentHTML('afterbegin',todoList)
    // input.value=''
//     } 
// }
var checkc=document.getElementsByName("check1");
checkc.OnClick=function jiancha(){
    if(checkc.checked=true){
      checkc.parentNode.style.color=grey;
      checkc.parentNode.style.textDirection="line-through";
  }
}


var todoItem = []
input.onkeyup = function(e) {
  if (e.keyCode === 13) {
    if (input.value !== '') {
      todoItem.push(input.value)
      makeList()
    }
  }
}

function makeList() {
  // 循环数组todoItem，生成多份li结构，添加到
for(var i=0;i<todoItem.length;i++){
    var todoList=`
    <li>
        <input type="checkbox" name="check1">
        <span>${input.value}</span>
    </li>
    `
}
    ul.insertAdjacentHTML('afterbegin',todoList)
    input.value=''
  // for   
  // todoItem.length
  // todoItem[i]

}








