const axios = require('axios');

axios.get('https://juejin.cn/frontend')
.then((res) => {
    console.log(res.data);
})


