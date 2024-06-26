const Koa = require('koa');
const app = new Koa()
const bodyParser = require('koa-bodyparser') //让koa能解析post参数
const cors = require('koa2-cors'); // 解决跨域

const user = require('./routes/user.js');


app.use(cors()) // 告诉浏览器允许跨域
app.use(bodyParser()) // 让koa能解析post参数

app.use(user.routes(),user.allowedMethods()) //koa的基本语法，让路由以及请求方法生效




app.listen(3000,() => {
    console.log('项目已启动！');
})