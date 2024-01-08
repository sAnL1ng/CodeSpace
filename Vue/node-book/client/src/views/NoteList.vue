<template>
    <div class="note-list">
        <ul>
            <li>
                <div class="img">
                    <img src="https://pix.veryjack.com/i/2023/04/04/fsxnkv.webp" alt="">
                </div>
                <p class="time">2023/05/20</p>
                <p class="title">今天去吃了猪脚饭和铁锅炖大鹅</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://a.520gexing.com/uploads/allimg/2023082315/lg1o542qkfm1.jpg" alt="">
                </div>
                <p class="time">2024/05/20</p>
                <p class="title">今天又去吃了猪脚饭</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://a.520gexing.com/uploads/allimg/2023082315/rs4jtexta1j2.jpg" alt="">
                </div>
                <p class="time">2025/05/20</p>
                <p class="title">今天还去吃了猪脚饭</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
// 页面加载中发请求，拿到当前分类的数据
import { onBeforeMount,onMounted } from 'vue';

onBeforeMount(() => {
    console.log('onBeforeMount');
})

onMounted(() => {
    console.log('onMounted');
})

</script>

<style lang="less" scoped>
.note-list{
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;
    ul{
        display: grid; 
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 50px;
        grid-column-gap: 30px;
        li{
            img{
                width: 100%;
                border-radius: 0.27rem;
            }
        }
        .time{
            font-size: 0.37rem;
            color: rgba(16,16,16,1);
            margin: 10px 0 5px 0;
        }
        .title{
            width: 3.5rem;
            font-size: 0.37rem;
            color: rgba(16,16,16,1);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
</style>