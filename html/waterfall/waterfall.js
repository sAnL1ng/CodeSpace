//1.读取用户屏幕第一行放了多少张图片
//2.操作下一张图，找到上一行最矮的高度，将图片排放到其下方
//反复执行1 & 2 直到结束

imgLocation('container','box')

function imgLocation(parent,content){//当前有多少张图片要摆放
    var cparnet = document.getElementById(parent)
    var ccontent = getChildElement(cparnet,content)
    var imgWidth = ccontent[0].offsetWidth
    var num = Math.floor(document.documentElement.clientWidth / imgWidth)
    cparnet.style.cssText = `width="${imgWidth * num}px`


    var BoxHeightArr=[]
    for(var i=0;i<ccontent.length;i++){
        if(i < num){
            BoxHeightArr[i] = ccontent[i].offsetHeight
        }else{//要操作的图
           var minHeight = Math.min.apply(null,BoxHeightArr)
           //minHeight是第几张 下标是多少
           var minIndex = BoxHeightArr.indexOf(minHeight)

           ccontent[i].style.position = 'absolute'
           ccontent[i].style.top = minHeight + 'px'
           ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'
           //更新这一列的高度
           BoxHeightArr[minIndex]=BoxHeightArr[minIndex] + ccontent[i].offsetHeight
        }
    }


    console.log(num);
}
function getChildElement(parent,content){
    var contentArr=[]
    var allContent = parent.getElementsByTagName('*')
    for(var i=0;i<allContent.length;i++){
        if(allContent[i].className == content){
            contentArr.push(allContent[i])
        }
    }


    return contentArr
    // console.log(contentArr);
}