<template>
    <ul>
        <li v-for="(item,index) in todos" :key="index">
            {{item.txt}}
        </li>
        <button type="button" @click="addTodo">What's more?</button>
    </ul>
</template>

<script setup>
const props=defineProps(['todos','addTodo'])
console.log(props.todos);
</script>

<style scoped>

</style>