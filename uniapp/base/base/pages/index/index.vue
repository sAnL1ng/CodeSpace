<template>
	<view class="content">
		<navigator url="/pages/about/about">去关于页面</navigator>
		<image class="logo" src="/static/logo.png" @click="goAbout"></image>
		<view class="text-area" @click="changeTitle">
			<text class="title">{{title}}</text>
			<text class="title">{{reverseTitle}}</text>
		</view>
		<view class="name">
			<text>{{ name }}</text>
		</view>
	
		<song :data="list.song"/>
	</view>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import song from "../../components/song.vue"

const title = ref('你好')
console.log(getApp().globalData.name); 
const name = ref(getApp().globalData.name)

const changeTitle = () => {
	title.value = title.value === "你好" ? "Hello" : "你好"
}

const reverseTitle = computed(() => {
	return title.value.split('').reverse().join('')
})

const list = reactive({
	song: {
		img: "https://img2.baidu.com/it/u=2835380845,4119634890&fm=253&fmt=auto&app=138&f=JPEG?w=610&h=395",
		title: "Panda",
		price: "10/只",
		marketPrice: "13/只"
	}
})

	
const goAbout = () => {
	uni.navigateTo({
		url:"/pages/about/about"
	})
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
