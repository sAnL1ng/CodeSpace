<template>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="../">Back</router-link>
  </nav>

  <router-view>

  </router-view>
</template>

<style>
#app{
  text-align: center;
  font-size: 40px;
}
</style>