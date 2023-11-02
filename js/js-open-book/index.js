var front = document.getElementsByClassName('front-cover')[0]
var book = document.getElementsByClassName('book')[0]
var card = document.getElementsByClassName('card')[0]
var shadow = document.getElementsByClassName('shadow')[0]

var hlod = false
var clamp = function(val,min,max){
    return Math.max(min,Math.min(val,max))
}

//鼠标是否按下
front.onmousedown = function(){
    hlod = true
}

//在window上监听鼠标松开
window.onmouseup = function(){
    hlod = false
}

window.onmousemove = function(e){
    if(hlod){
        //修改左半边书的角度，卡片旋转，阴影倾斜
        var deg = clamp((window.innerWidth / 2 - e.x + 300) / 300 * -90, -180, 0)
        front.style.transform = `rotateY(${deg}deg)`
        //整本书立起来 60 + deg / 8
        book.style.transform = `rotateX(${60 + deg / 8}deg)`
        //卡片 deg / 2
        card.style.transform = `rotateX(${deg / 3}deg)`
        //阴影倾斜 deg / 8 (css样式倾斜)
        shadow.style.transform = `skew(${deg / 8}deg)`

    }
}

console.log(front);