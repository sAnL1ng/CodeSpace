<script setup>
// import Rate from './components/Rate.vue'
import JHead from './components/JHead.vue'
import JMain from './components/JMain.vue'
import JAdver from './components/JAdver.vue'
import JSide from './components/JSide.vue'

</script>

<template>
  <!-- <h1>Hello Vue!!!!!</h1>
  <Rate /> -->
  <div class="heaader">
    <JHead/>
  </div>
  <div class="aside">
    <JSide/>
  </div>
  <div class="main">
    <JMain/>
  </div>
  <div class="right">
    <JAdver/>
  </div>
</template>

<style scoped>
</style>
