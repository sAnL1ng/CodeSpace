const http = require('http');

const server = http.createServer((req, res) => { // req 前端的请求， res后端的响应
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  console.log(req.url, req.method);

  const { url } = req
  const query = Object.fromEntries(new URL(url, 'http://localhost').searchParams)
  console.log(query);

  if (url === '/home') {
    res.end('<h1>hello home</h1>')

  } else if (url.startsWith('/detail')) {
    
    if (query.id == 1) {
      res.end('<h1>hello detail 1111</h1>')
    } else if (query.id == 2) {
      res.end('<h1>hello detail 222</h1>')
    }
    
  } else {
    res.end('not found')
  }

  
})

server.listen(3000, () => {
  console.log('listening on port 3000');
})