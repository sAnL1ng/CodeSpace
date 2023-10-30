// 监听用户敲击enter
var input=document.getElementById("list-input")
var ul=document.getElementById("list")
input.onkeyup=function(e)
{
    if(e.keyCode===13)
    {
//读取input框内的值
    input.value
//生成一个li结构
//将input中的值添加到li中
    var todoList=`
    <li>
        <input type="checkbox">
        <span>${input.value}</span>
    </li>
    `
    //将li添加到ul中
    ul.insertAdjacentHTML('afterbegin'.todoList)
    }
}






