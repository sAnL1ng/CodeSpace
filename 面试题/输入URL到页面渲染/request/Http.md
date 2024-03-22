# 超文本传输协议 HTTP/0.9
1. 客户端发送GET请求，请求一个 xxxx/index.html
2. 服务器接收到请求后，读取对应的`html文件`，以`ASCII码`的`字符流形式`返回给客户端

- 特点
  1. 当年只有请求行，没有请求头和请求体
  2. 没有响应头
  3. 传输的内容是以ASCII的字符流

# HTTP/1.0
  可以相比于0.9，1.0可以支持多种类型文件的传输

  通过引入`请求头`和`响应头`来让客户端和服务端`更加深入的交流`, `key-value形式`

  - 为什么有了请求头和响应头就能支持多种文件的传输
  
  请求头：accept:text/html
          accept-encoding:gzip, deflate, br ——期望的压缩方式
          accept-language:zh-CN ——期望的语言

  响应头：Content-encoding: br
          Content-type: text/html; charset=utf-8

# HTTP/1.1
    