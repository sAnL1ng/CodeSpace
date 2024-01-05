const http = require('http');

const server = http.createServer((req,res) => { // req 前端的请求 res 后端的响应
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    const { url } = req
    const query = Object.fromEntries(new URL(url,'http://localhost').searchParams)

    if( url === '/home' ){
        res.end('<h1>Hello Home!</h1>')
    }else if (url.startsWith('/detail')){

        if(query.id == 1){
            res.end(`<h1>Hello Detail 1111!</h1>`)
        }else if(query.id == 2){
            res.end('<h1>Hello Detail 2222!</h1>')
        }

        res.end('<h1>Hello Detail!</h1>')
    }else {
        res.end('Not Found')
    }
})

server.listen(3000,() => {
    console.log('Listening on port 3000');
})