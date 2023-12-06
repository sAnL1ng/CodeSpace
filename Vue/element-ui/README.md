# 路由传参的4种方法(非常重要)

1. this.$router.push(`/home/${this.account}`) 
需要在路由配置中声明该路径可以携带参数 '/home/:user'

2. this.$router.push({name:'home',query: {user: this.account}})
它会将参数以？的形式拼接在url中

3. this.$router.push({name:'home',params: {user: this.account}})
需要在路由配置中声明该路径可以携带参数 '/home/:user'

4. this.$router.push({name:'home',hash: `#${this.account}`})
这种方法参数前面会多一个#