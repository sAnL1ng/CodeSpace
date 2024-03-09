const jwt = require('jsonwebtoken')

function sign(option) {
    return jwt.sign(option, '798', { // '798' 是密钥，可以自己设置，简称加盐
        expiresIn: 60, //token的有效时常
    })
}

const verify = () => (ctx,next) => {
    let jwtToken = ctx.req.headers.authorization
    if (jwtToken) {
        //校验合法性
        jwt.verify(jwtToken, '798', (err, decode) => {
            if (err) { // 前端传过来的token有问题
                ctx.body = {
                    status: 401,
                    message: 'token失效',
                }
            } else {
                next()
            }
        })
    } else {
        ctx.body = {
            status: 401,
            message: 'token不存在'
        }
    }
}

module.exports = {
    sign,
    verify
}