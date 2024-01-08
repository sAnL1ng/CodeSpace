const Router = require('koa-router');
const router = new Router()
const { userLogin, userFind,userRegister } = require('../controllers/mysqlControl.js')



// 定义接口
router.post('/login', async (ctx) => {
    // 获取前端传递的账号和密码，去数据库中校验账号和密码的正确性
    const { username, password } = ctx.request.body;
    try {
        const result = await userLogin(username, password);
        // console.log(result);
        if (result.length) { // 账号密码存在
            let data = {
                id: result[0].id,
                nickname: result[0].nickname,
                username: result[0].username
            }
            ctx.body = {
                code: '8000',
                data: data,
                msg: '登录成功'
            }
        } else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '账号或密码错误'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})

// 定义注册接口
//定义注册接口
router.post('/register',async (ctx)=>{
    //拿到前端传过来的username password nickname
    //在数据库中校验 username 是否存在 如果不存在
    //往数据库中植入一条新的数据
    const { nickname,username,password } = ctx.request.body 
    if(!username || !password || !nickname){
        ctx.body={
            code:'8001',
            msg:'账号密码或昵称不能为空'
        }
        return 
    }
    try {
        const findRes = await userFind(username)
        // console.log(findRes);
        if(findRes.length){
            ctx.body={
                code:'8003',
                data:'error',
                msg:'账号已存在'
            }
            return 
        }
        const registerRes = await userRegister([username,password,nickname])
        // console.log(registerRes);
        if(registerRes.affectedRows){
            ctx.body = {
                code:'8000',
                data:'sucess',
                msg:'注册成功'
            }
        }else{
            ctx.body = {
                code:'8004',
                data:'error',
                msg:'注册失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code:'8005',
            data:error,
            msg:'服务器异常'
        }
    }
})
module.exports = router