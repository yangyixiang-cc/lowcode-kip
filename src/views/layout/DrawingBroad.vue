<!-- 画板 -->
<template>
  <div class="box">
    <div class="box-container" :style="containerStyle">
      <draggable :list="tList" item-key="id" :group="{ name: 'course', pull: true, put: true }" @change="saveStateList">
        <template #item="{ element }">
          <component :is="element.key" :data="utils.deepCopy(element.config)"></component>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';
import { storeToRefs } from "pinia";
import { userMainStore } from "@/store"; // 引入
import { computed } from '@vue/reactivity';
import utils from "@/utils/tools"

const mainStore = userMainStore();
const { tList, tree } = storeToRefs(mainStore); // 解构并使数据动态化

let style = computed(()=>{
  let temp = {};
  tree.value.style.forEach(item => {
    temp[item.attr] = item.val;
  });
  return temp;
});
const containerStyle = computed(() => ({
    width: tree.value.container.width + 'px',
    height: tree.value.mode == "PC" ? '100%' : tree.value.container.height + 'px',
    marginTop: tree.value.mode == "PC" ? '' : 50 + 'px',
    ...style.value
}));

function saveStateList() {
  mainStore.saveCurrentPage();
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
  font-size: 14px;
  font-weight: bold;
  background-color: #edeff3;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    scrollbar-arrow-color: rgb(56, 56, 56);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: .0625rem;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
    scrollbar-arrow-color: #000;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 .0625rem rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: #fff;
  }

  &-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    box-shadow: var(--el-box-shadow-dark);
    margin: auto;
    overflow: auto;
    background-color: #ffffff;

    >div {
      height: 100%;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      scrollbar-arrow-color: #000;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: .0625rem;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0.2);
      background: rgba(0, 0, 0, 0.2);
      scrollbar-arrow-color: #000;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 .0625rem rgba(0, 0, 0, 0.2);
      border-radius: 0;
      background: #fff;
    }
  }
}
</style>