<template>
    <div class="w-screen h-screen flex items-stretch overflow-hidden">
        <div class="w-56 h-screen flex-shrink-0">
            <Menu />
        </div>
        <div class="flex-1 flex flex-col">
            <div class="h-14">
                <Header />
            </div>
            <div class="flex-1" overflow-hidden>
                <ELScrollbar>
                    <div class="container max-auto">
                        <router-view />
                    </div>
                </ELScrollbar>
            </div>
        </div>
    </div>
</template>

<script setup>
import Menu from '@/components/layout/menu/Menu.vue';
import Header from '@/components/layout/header/Header.vue';
// import Discover from '@/views/discover/Discover.vue';
// import { onMounted } from 'vue'
// import Menu from './components/layout/menu/Menu.vue'
// import { getBanner } from '@/utils/api.js'


// 请求发送的时机在何时？
// onMounted(async () => {
//   const data = await getBanner()
//   console.log(data);
// })
</script>

<style scoped>

</style>