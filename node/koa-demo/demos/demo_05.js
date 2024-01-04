const Koa = require('koa')
const app = new Koa()
const Router = require('@koa/router')
const router = new Router()

const logger = (ctx, next) => { // 日志
  console.log(`${ctx.url} - ${ctx.method} - ${Date.now()}`);
  next()
}

const main = (ctx) => {
  ctx.body = '首页页面'
}
const about = (ctx) => {
  ctx.body = 'about page'
}



router.get('/main', main)
router.get('/about', about)

app.use(logger)
app.use(router.routes()) // 所有配置的路由都生效
app.use(router.allowedMethods()) // 





app.listen(3000, () => {
  console.log('项目运行在3000端口');
})