<script setup lang="ts">
import error_img from '@/assets/image/404.png';
import { useRouter } from 'vue-router';

const router = useRouter();

function back():void{
    router.back();
}

</script>

<template>
    <div class="box">
        <img :src="error_img" alt="404" class="box-img">
        <p class="box-p">抱歉页面找不到了</p>
        <el-button type="primary" size="large" @click="back"> &nbsp;&nbsp;&nbsp;返 回&nbsp;&nbsp;&nbsp; </el-button>
    </div>

</template>

<style lang="scss">
    .box{
        width: 100%;
        height: 100%;
        text-align: center;
        margin-top: 100px;

        &-p{
            font-size: 28px;
            margin-top: 20px;
            margin-bottom: 30px;
        }
    }
</style>