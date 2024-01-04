const Koa = require('koa')
const app = new Koa()

// 错误的集中处理
const handle = async(ctx, next) => {
  try {
    await next()
  } catch (error) {
    // console.log(error, '-----');
    ctx.response.status = error || 500
    ctx.response.type = 'html'
    ctx.body = '<p>页面找不到了，请稍后再试</p>'
  }
}



const main = (ctx) => {
  // ctx.body = 'Hello world'
  throw(500)
}

app.use(handle)
app.use(main)




app.listen(3000, () => {
  console.log('项目运行在3000端口');
})