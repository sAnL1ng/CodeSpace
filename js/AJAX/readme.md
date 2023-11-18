# AJAX (async javascript and xml)

# XMLHttpRequest
- ajax状态：
0 -- xhr 刚刚创建，请求还没发
1 -- open刚刚完成
2 -- 请求已经发送，客户端接收到了响应头
3 -- 接收到服务端返回的响应体，正在解析
4 -- 解析完成

- http status
2xxx 成功
3xxx 重定向
4xxx 客户端错误
5xxx 服务器端错误