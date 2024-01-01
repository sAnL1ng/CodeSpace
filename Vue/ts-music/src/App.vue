<script setup lang="ts">

import { onMounted, toRefs } from 'vue';
import { usePersonalizedStore } from './store/personalized'

const { getPersonalized } = usePersonalizedStore();
const { personalizedMv } = toRefs(usePersonalizedStore());

onMounted(async () => {
  await getPersonalized()
})
</script>
<template>
  <Banner />
  <!-- <ul>
    <li v-for="banner in banners" :key="banner.targetId">
      <img :src="banner.pic" >
    </li>
  </ul>
-->
  <ul>
    <li v-for="mv in personalizedMv" :key="mv.id">
      <img :src="mv.picUrl">
    </li>
  </ul>
</template>

<style scoped></style>