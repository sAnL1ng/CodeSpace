<template>
  <div>
    {{ count }}*2 = {{ double }}
    <br>
    <button @click="add">add</button>
    <button @click="asyncAdd">asyncAdd</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
//hooks编程
import { useStore } from './store/gvuex.js';

let store = useStore();
let count = computed(() => store.state.count);
let double = computed(() => store.getters.double);

function add() {
  store.commit('add')
}

function asyncAdd() {
  store.dispatch('asyncAdd')
}
</script>

<style lang="css" scoped></style>