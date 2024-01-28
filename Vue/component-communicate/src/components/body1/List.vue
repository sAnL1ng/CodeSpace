<template>
    <div class="body">
        <ul>
          <li v-for="(item,index) in lists" :key="index">{{ item }}</li>
        </ul>
    <button @click="changeProps">修改props</button>
    </div>
</template>

<script>
    export default {
        props:['lists'],
        methods:{
            changeProps(){
                this.lists[0] = 'HTML'
                this.lists[1] = 'CSS'
            }
        },
        data(){
            return{
                
            }
        },
    }
</script>

<style lang="css" scoped>

</style>