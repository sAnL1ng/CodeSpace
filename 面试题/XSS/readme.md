# XSS
`Cross Site Scripting` 跨站脚本攻击

黑客往你的页面`注入恶意脚本`

1. 窃取Cookie信息：黑客可以在其他电脑上模拟登录状态。
2. 可以监听用户行为：监听到用户键盘事件，掌握用户信息。
3. 伪造登录窗口
4. 在你的页面生成浮窗广告


- 怎么注入？
1. 存储型攻击：将脚本提交到数据库中
2. 反射型攻击
3. 基于DOM的XSS攻击

- 怎么防范？
1. 服务端对接收到的脚本进行转码
   <script>alert('你被攻击了')</script>
   %3Cscript%3Ealert(%27%E4%BD%A0%E8%A2%AB%E6%94%BB%E5%87%BB%E4%BA%86%27)%3C/script%3E

2. 利用好内容安全策略（CSP），第三方的js代码是无法加载的
    
3. HttpOnly
Set-Cookie: name=John; HttpOnly

# CSRF
`Cross-site request forgery` 跨站请求伪造
    
黑客引诱你打开一个网址，黑客拿到你的登录状态，并通过第三方站点来操作恶意行为。

- 预防
    1. 利用好Cookie的SameSite属性

    2. 服务端验证请求来源

