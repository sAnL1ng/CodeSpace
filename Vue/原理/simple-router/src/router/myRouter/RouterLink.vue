<template>
    <a :href="'#'+to">
      <slot /> <!--使得在组件标签之间的内容成为链接的文本内容。-->
    </a>
  </template>
  
  <script setup>
  defineProps({
    to: {
      type: String,
      required: true 
    }
  })
  </script>