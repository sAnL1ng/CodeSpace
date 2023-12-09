<template>
    <!-- element-plus 用户体验的直觉 滚动的列表 eg:详情页-->
    <ElScrollbar>
    <div>
        <div class="mt-10 pl-6 pr-6 space-y-1.5" 
        v-for="menuItem in menus">
            <div class="menu-title text-main">{{menuItem.name}}</div>
            <div
                class="menu-item hover-bg-main text-main"
                v-for="menu in menuItem.menus"
                :key="menu.key"
                :class="{'active': currentKey === menu.key}"
                @click="changeMenu(menu)"
            >
                <IconPark :icon="menu.icon" size="18" :theme="menu.theme"></IconPark>
                <span class="ml-1">{{ menu.name }}</span>
            </div>
        </div>
    </div>
    </ElScrollbar>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue';
// 模块化 hooks 编程
// 让数据离开组件，使得组件很好读，提升组件的可读性
// 这种编程方式是当下流行的函数式编程   固定的范式， use 开头
import { useMenu } from './useMenu.js'
const { menus,currentKey,changeMenu } = useMenu()

</script>

<style scoped>
/* 将一些类集合起来 */
.menu-title {
    @apply text-xs pl-4 pr-4 pb-2;
}
.menu-item {
    @apply text-sm pl-4 pr-4 pt-1.5 pb-1.5 rounded cursor-pointer transition-colors flex items-center;
}
.active {
    @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default
}


</style>