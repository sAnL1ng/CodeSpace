<template>
  <div>
    <p>{{ state.count }}</p>
    <button @click="() => state.count++">add</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  count: 1,
})
</script>

<style lang="css" scoped>

</style>