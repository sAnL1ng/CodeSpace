<template>
    <div>
        <div class="body">
    <ul>
      <li v-for="(item,index) in lists" :key="index">{{ item }}</li>
    </ul>
  </div>
</div>
 
</template>

<script>
    export default {
        props:['lists'],
        data(){
        return {
         
        }
      },
      
    }
</script>

<style lang="css" scoped>

</style>