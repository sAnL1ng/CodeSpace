const userInfo = require('../../modles/login') 

const login = async(ctx,next)=> {
    const {account,password} = ctx.request.body

    // 在数据库中查找账号是否已经注册  不存在 result = null
    const user = await userInfo.findOne({
        account: account
    })
    if(!user){
        ctx.status = 200
        ctx.body = {
            code:0,
            msg:'用户不存在'
        }
    }else{
        ctx.body = {
            code:1,
            msg:'登入成功',
            data: {
                user: user
            }
        }
    }

}