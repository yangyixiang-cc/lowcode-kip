<template>
  <div class="box">
    <div class="box-content">
      <draggable :list="list" item-key="id" :group="{ name: 'course', pull: 'clone', put: false }" :sort="false">
        <template #item="{ element }">
          <el-card class="card-style" shadow="hover" :body-style="{padding: 0}">
            <div class="card-title">
              <span>{{ element.label }}</span>
            </div>
            <div class="card-content">
              <img :src="element.svg" class="card-image" />
            </div>
          </el-card>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';
import {storeToRefs} from "pinia";
import {userMainStore} from "@/store/index"; // 引入

const mainStore = userMainStore();
const {list} = storeToRefs(mainStore); // 解构并使数据动态化
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  overflow-y: scroll;

  &-top {
    margin-bottom: 20px;
  }

  &-content {
    width: 100%;

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding-left: 3px;
    }

    .card-style {
      width: 100%;
      height: 160px;
      margin: 10px 0;

      .card-title {
        height: 30px;
        color: #303133;
        line-height: 30px;
        border-bottom: 1px #F2F6FC solid;
        font-size: 14px;
        font-weight: bold;

        > span {
          padding-left: 10px;
        }
      }

      .card-content {
        height: 130px;
        position: relative;

        .card-image {
          max-height: 80%;
          display: block;
          object-fit: contain;
          position: absolute;
          top:50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>