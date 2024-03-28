const http = require('http')
// url模块  做字符串url路径的解析
const url = require('url')
// path 解析路径 解析绝对相对
const path = require('path')
// 文件模块
const fs = require('fs')
const mime = require('mime-types')
const { timeStamp } = require('console')
const checksum = require('checksum')

const server = http.createServer((req, res) => {
    // 将前端请求的地址转换成真实的url，再拼接www这个路径，最后读取整个文件的绝对路径
    let filePath = path.resolve(__dirname, path.join('www', url.fileURLToPath(`file:/${req.url}`))) // __dirname 绝对路径
    // console.log(filePath);
    if (fs.existsSync(filePath)) { // 判断资源是否存在
        const stats = fs.statSync(filePath) // statSync读取文件的详细参数，比如创建时间等
        // console.log(stats);
        const isDir = stats.isDirectory() // 是文件(false)还是文件夹(true)
        // console.log(isDir);
        if (isDir) { // 文件夹
            filePath = path.join(filePath, 'index.html')
        }
        // -----------------------------------------------------------------------------
        if (!isDir || fs.existsSync(filePath)) { // 文件
            // 读取资源文件向前端返回
            const content = fs.readFileSync(filePath) // 读取文件
            const { ext } = path.parse(filePath)

            // console.log(status);
            // const timeStamp = req.headers['if-modified-since']

            let status = 200;
            if (timeStamp && Number(timeStamp) === stats.mtimeMs) { // 资源如果没有被修改
                status = 304;
            }


            checksum.file(filePath, (err, sum) => {
                const resStream = fs.createReadStream(filePath)
                sum = `"${sum}"`
                if (req.headers['if-none-match'] === sum) {
                    res.writeHead(304, {
                        'Content-Type': mime.lookup(ext),
                        // 'Cache-Control': 'max-age=86400', // 一天 
                        'etag': sum// 签名
                        // 'Last-Modified': stats.mtimeMs //时间戳  1711626120756.6887    1711632125464.5403
                    })
                } else {
                    res.writeHead(200, {
                        'Content-Type': mime.lookup(ext),
                        'etag': sum// 签名
                    })

                    resStream.pipe(res)
                }
            })

            return res.end(content)

            // const fileStream = fs.createReadStream(filePath) // 读取文件将文件都成流类型
            // fileStream.pipe(res) // 将流类型资源汇入响应体中

        }
    }

    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end('<h1>404 Not Found</h1>')

})

server.listen(3000, () => {
    console.log('listening on port 3000');
})