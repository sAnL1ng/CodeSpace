<template>
    <div>
        <div class="login">
            <div class="login-wrap">

                <div class="item">
                    <span>账号：</span>
                    <input type="text" v-model="account">
                </div>
                <div class="item">
                    <span>密码：</span>
                    <input type="text" v-model="password">
                </div>
                <div class="item">
                    <button @click="login">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                account: "sAnL1ng",
                password: "123",
            }
        }, 
        methods:{
            login(){
                // 获取用户输入的账号密码 再发起请求传给后端
                console.log("账号："+this.account,"密码："+this.password);
                if(!this.account || !this.password){
                    alert('账号或者密码不能为空')
                    return
                }

                // console.log(this.$router);
                // 用JS控制路由的跳转
                // this.$router.push(`/home/${this.account}`)
                // this.$router.push({name:'home',params: {user: this.account}})
                this.$router.push({name:'home',hash: `#${this.account}`})
            }
        }
    }
</script>

<style lang="less" scoped> /*scoped代表样式私有化*/
.login{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #aaa;
    .login-wrap{
        width: 400px;
        height: 300px;
        border: 1px solid rgb(189, 165, 165);
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px #fff;
        padding: 20px;
        // box-sizing: border-box;
        font-size: 26px;
        .item{
            display: flex;
            margin-top: 20px;
            input{
                flex: 1;
                padding: 0 10px;
                font-size: 20px;
            }
            button{
                font-size: 30px;
                flex: 1;
                border-radius: 1000px;
                border: none;
                background: rgb(159, 243, 13);
                color: #fff;
                padding: 5px 0;
                cursor: pointer;
            }
        }
    }
}
</style>