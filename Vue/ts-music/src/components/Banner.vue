<template>
    <div>
        <ul>
            <li v-for="banner in banners" :key="banner.targetId">
                <img :src="banner.pic">
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { toRefs,onMounted } from 'vue';
import { useBannerStore } from '../store/banner';
const { banners } = toRefs(useBannerStore());
const { getBanners } = useBannerStore();

onMounted(async () => {
  await getBanners()
})
</script>

<style scoped></style>