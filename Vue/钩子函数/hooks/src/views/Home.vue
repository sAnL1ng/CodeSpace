<template>
    <div>
        This Home Page
        <Hello />
    </div>
</template>

<script setup>
import Hello from '../components/Hello.vue'
import { onMounted,onActivated,onDeactivated,onBeforeMount,onUnmounted } from 'vue'

onBeforeMount(() => {
    console.log('首页的onBeforeMount');
})

onMounted(() => {
    console.log('首页的onMonted');
})

onUnmounted(() => {
    console.log('首页卸载');
})

onActivated(() => { // 当被缓存的组件再次生效时触发
    console.log('首页onActivated');
})

onDeactivated(() => { // 当组件被缓存起来的时候触发
    console.log('首页的onDeactivated');
})

</script>

<style lang="css" scoped></style>