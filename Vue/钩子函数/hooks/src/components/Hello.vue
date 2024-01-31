<template>
    <div>
        <p> {{ count }} </p>
        <button @click="() => count++">+</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const count = ref(0)

// onMounted(() => {
//     console.log('组件中的onMonted');
// })

</script>

<style lang="css" scoped></style>