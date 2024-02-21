<template>
  <div>
    <p>{{ state.count }}</p>
    <!-- <p>{{ num }}</p> -->
    <button @click="() => state.count++">add</button>
  </div>
</template>

<script setup>
import { computed, reactive, watch, effect, watchEffect, ref } from 'vue';

const state = reactive({
  count: 1,
  msg: 2,
  abc: 123
})

const age = ref(18)
console.log(age);
// const age = ref(age)

// const num = computed(() => {
//   return state.count * 10
// })

// watch(
//   () => state.count,
//   (newVal, oldVal) => {
//     console.log(newVal, oldVal)
//   },
//   {immediate: true}
// )

// watchEffect(
//   () => {
//     console.log('watchEffect', state.count);
//   },
//   {
//     flush: 'post', // 延迟到组件渲染完后执行
//     onTrack() { // 调度函数
//       console.log('onTrack,会在count被收集依赖的环节被调用');
//     },
//     onTrigger() { // 调度函数
//       console.log('onTrigger,会在count依赖触发的环节被调用');
//     }
//   }
// )

// effect(() => { // 类似于生命周期，一开始就会执行
//   console.log('hello world',state.count);
// },
//   {
//     lazy: false, // ture：延迟执行，false：立即执行
//     scheduler: () => { // 当调度函数生效的时候，副作用函数就不再触发
//       console.log('调度器中的任务执行了');
//     }
//   } 
// )
</script>

<style lang="css" scoped></style>