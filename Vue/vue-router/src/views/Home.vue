<template>
    首页
    <nav>
        <router-link to="/home/newest">最新</router-link>|
        <router-link to="/home/recommend">推荐</router-link>
    </nav>
    <router-view></router-view>
</template>