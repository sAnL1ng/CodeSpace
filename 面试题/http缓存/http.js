const http = require('http')
const url = require('url')

const responseData = {
    id: 'zhangsan',
    Name: '张三',
    RegisterDate: '2024年3月28日'
}
function toHTML(data) {
    return `
        <ul>
            <li><span>账号：</span>${data.id}</li>
            <li><span>昵称：</span>${data.Name}</li>
            <li><span>注册时间：</span>${data.RegisterDate}</li>
        </ul>
    `
}

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(`https://${req.headers.host}${req.url}`)
    if (pathname === '/') {
        const accept = req.headers.accept
        // console.log(accept);  // '请求头内的信息'

        if (accept.indexOf('application/json') !== -1) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(responseData))
            // res.end('<h1>hello world</h1>') // 浏览器直接当成html解析
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.end(toHTML(responseData))
        }

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>Not Found</h1>')
    }
    // console.log(pathname); // '/'
})

server.listen(3000, () => {
    console.log('running on port 3000');
})