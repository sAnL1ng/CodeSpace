# token 令牌

- cookies 是浏览器的内存空间，但是受后端的掌控，通常是后端将JWT（登录令牌）保存在cookies中，所有被保存在cookies中的数据，都会在http请求时自动被携带在请求头中。

- Token由三部分组成: 头部-负载-签名
  1. header(头部)
  2. payload(负载)
  3. autograph(签名)

- 前端登录后，后端校验账号密码的成功后，靠jwt来生成一个token，并将该token返回给前端，前端在接受到token后，将token保存在浏览器的本地缓存，封装了axios，在请求拦截当中为每一次的请求头中添加一个authorization字段，之后的接口请求，后端获取到请求头中的token，并进行校验，如果token合法，则返回数据，否则返回401状态码告诉前端token失效。