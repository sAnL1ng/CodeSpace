<template>
    <div>
        <button @click="updateList">更新列表</button>
        <ul>
            <li v-for="n in list">{{ n }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { myNextTick } from './next-tick'

const list = ref(new Array(20).fill(0))

const updateList = () => {
    list.value.push(...(new Array(10).fill(1)))

    myNextTick(() => {
        const liItem = document.querySelector('li:last-child')

        liItem.scrollIntoView({
            behavior: 'smooth'
        })
    })
}


myNextTick(() => {
    console.log('myNextTick');
})

onMounted(() => {
    console.log('onMounted');
})
</script>

<style lang="css" scoped>
li {
    height: 30px;
    margin: 30px 0;
    background-color: #a92e2e;
}
</style>