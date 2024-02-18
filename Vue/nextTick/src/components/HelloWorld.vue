<template>
  <div>
    <p ref="refP">消息：{{ msg }}</p>
    <button @click="updateMsg">点击更新</button>
  </div>
</template>

<script setup>

import { ref, onBeforeMount, nextTick } from 'vue'

const msg = ref('初始消息')
const refP = ref(null)

// console.log(refP.value); // NULL

// onBeforeMount(() => {
//   console.log(refP.value); // NULL
// })

// setTimeout(() => {
//   console.log(refP.value, 'setTimeout');// <p>消息：初始消息</p>
// }, 0);

// nextTick(() => {
//   console.log(refP.value, 'nextTick'); // <p>消息：初始消息</p>
// })


const updateMsg = () => {
  msg.value = '更新后的信息'
}

</script>

<style lang="css" scoped></style>