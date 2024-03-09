const router = require('koa-router')()
const jwt = require('../utils/jwt.js')

router.post('/login', (ctx) => {
    let user = ctx.request.body //获取到前端传递的参数
    // console.log(user);
    // 去数据库中查看是否存在user中一样的账号密码
    if (1) {
        // 创建一个token
        let jwtToken = jwt.sign({ id: '001', username: user.username, admin: true })
        console.log(jwtToken);
        ctx.body = {
            code: 0,
            data: `你好${user.username}`,
            token: jwtToken, //如何打造一个toekn
        }
    } else {
        ctx.body = {
            code: 1,
            data: '账号或密码错误'
        }
    }
})

// 首页的接口 校验前端在请求头当中携带过来的token是否有效
router.post('/home', jwt.verify(), (ctx) => {
    ctx.body = {
        code: 0,
        data: '这是首页的数据'
    }
})



module.exports = router