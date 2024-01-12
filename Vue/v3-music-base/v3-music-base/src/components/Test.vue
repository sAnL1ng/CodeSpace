<template>
    <div>
        <!-- 组件内部可以被外部定制的插槽 -->
        <slot name="header"/>
        Test
        <slot />
        <slot name="footer"/>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>