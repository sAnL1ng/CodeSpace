fetch('https://juejin.cn/frontend')
.then((res) => res.json())
.then((data) => {
    console.log(data);
})