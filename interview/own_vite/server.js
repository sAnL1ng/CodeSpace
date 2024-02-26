const Koa = require('koa')
const fs = require('fs')

// /后端路由
const app = new Koa()
const path = require('path')

function rewriteImport(content) {
    // [0-9] 匹配0-9中的任何一个字符
    // [^'"] 捕获所有非单引号和双引号的任何字符 +代表匹配1次或多次
    // () 代表分组 是一个捕获组 
    // 从匹配到的字符串中截取 g是一个修饰符 代表全局匹配
    return content.replace(/ from ['|"]([^'"]+)['|"]/g, function (s0, s1) {
        // console.log(s0,s1);
        if (s1[0] !== '.' && s1[0] !== '/') {
            return `from '/@modules/${s1}'`
        } else {
            return s0
        }
    })
}
// 后端路由
// 中间件 middleware 洋葱模型
app.use(async ctx => {
    // 如果/ 
    // 上下文请求对象 + 响应对象
    const { request: { url, query } } = ctx

    if (url === '/') {
        // 设置响应头 
        ctx.type = 'text/html'
        let content = fs.readFileSync('./index.html', 'utf-8')
        ctx.body = content
    } else if (url.endsWith('.js')) {
        // resolve 解析为有效的物理地址
        // console.log(__dirname,url.slice(1));
        const p = path.resolve(__dirname, url.slice(1))
        ctx.type = 'application/javascript'
        const content = fs.readFileSync(p, 'utf-8')
        ctx.body = rewriteImport(content)
    }
})
app.listen(5173, () => {
    console.log('项目已启动，快来一起手写vite，拿下字节！');
})