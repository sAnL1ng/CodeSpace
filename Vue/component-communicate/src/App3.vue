<template>
    <div>
        <Head @add="handel"/>
        <List :lists="lists"/>
    </div>
  </template>
  
  <script>
  import Head from '@/components/body3/Head.vue'
  import List from '@/components/body3/List.vue'
    export default {
        components:{
            Head,
            List
        },
        data(){
            return {
                lists:['html','css'],
                message:''
            }
        },
        methods:{
            handel(val){
                this.lists.push(val)
            }
        }
    }
  </script>
  
  <style lang="less" scoped>
  
  </style>