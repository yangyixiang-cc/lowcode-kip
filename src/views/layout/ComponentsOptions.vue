<template>
  <div class="box">
    <div class="title">组件列表</div>
    <div v-if="tList && tList.length > 0">
      <el-collapse accordion>
        <el-collapse-item v-for="(item, index) in tList" :key="index" :title="`#${index + 1} ${item.label}`">
          <component :is="item['component']" :data="item['config']" :index="index" />
        </el-collapse-item>
      </el-collapse>
    </div>
    <div v-else>
      <img :src="NoComponent_IMG" class="place-image" alt="当前没有拖入组件" />
      <div style="text-align: center; font-size: 14px; color: #555555">请拖动组件到页面当中</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {userMainStore} from "@/store";
import {storeToRefs} from "pinia";
import NoComponent_IMG from "@/assets/image/NoComponent.png";

const mainStore = userMainStore();
const {tList} = storeToRefs(mainStore);
</script>

<style lang="scss" scoped>
.box {
  padding: 20px;

  .title {
    margin-bottom: 10px;
    font-size: 28px;
    color: #409EFF;
  }

  .place-image {
    width: 60%;
    object-fit: contain;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
