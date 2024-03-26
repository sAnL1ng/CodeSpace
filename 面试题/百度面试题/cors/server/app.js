const http = require('http')

const server = http.createServer((req, res) => {
    // 跨域是浏览器不接受后端的响应
    // 想个办法，让浏览器不得不接受
    res.writeHead(200, {
        // 'Access-Control-Allow-Origin': '*' // 白名单
        'Access-Control-Allow-Origin': '*' 
    })

    let data = {
        msg: "hello cors"
    }
    res.end(JSON.stringify(data))   // 向前端返回数据
})

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})