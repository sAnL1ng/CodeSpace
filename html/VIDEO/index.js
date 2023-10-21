var speed = document.querySelector('.speed')

speed.addEventListener('mousemove',function(e){
    var y= e.y - speed.offsetTop;
    var percent= y/speed.offsetHeight;
    var height=Math.round(percent * 100)+'%';
    var bar=document.querySelector('.speed-bar');
    var viedo=document.querySelector('.flex')

    bar.style.height=height;


    console.log(height);


    var min=0.4;
    var max=4;
    var playbackRate=percent*(max-min)+min;
    bar.textContent=playbackRate.toFixed(2)+'x';

    //视频播放速度
    viedo.playbackRate=playbackRate;
})