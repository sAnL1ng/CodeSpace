const http = require('http')

const server = http.createServer((req, res) => {
    // res.writeHead(200, {
    //     'Access-Control-Allow-Origin': '*'
    // })

    let data = {
        msg: "hello cors"
    }
    res.end(JSON.stringify(data))   // 向前端返回数据
})

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})