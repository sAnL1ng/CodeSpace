<template>
    <div>
        This About Page
        <Hello />
    </div>
</template>

<script setup>
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
import Hello from '../components/Hello.vue'
import { onMounted } from 'vue'

onMounted(() => {
    console.log('关于页面的onMonted');
})

// onBeforeRouteLeave((to, from, next) => {
//     const flag = window.confirm('Do you really want to leave this page ?')
//     if (flag) {
//         next()
//     } else {
//         return
//     }
// })

</script>

<style lang="css" scoped></style>