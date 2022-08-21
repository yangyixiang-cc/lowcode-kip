<template>
  <div class="container">
    <div class="upper">
      <el-button type="danger" @click="$router.back()">退出预览</el-button>
    </div>
    <div class="upper-next">
      <div class="preview-page" :style="containerStyle">
        <component v-for="(item, index) in tList" :key="index" :is="item.key" :data="utils.deepCopy(item.config)">
        </component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { userMainStore } from "@/store"; // 引入
import utils from "@/utils/tools"
import { computed } from "vue";

const mainStore = userMainStore();
const { tList, tree } = storeToRefs(mainStore); // 解构并使数据动态化

let style = {};
tree.value.style.forEach(item => {
  style[item.attr] = item.val;
});


const containerStyle = computed(() => ({
  width: tree.value.container.width + 'px',
  height: tree.value.mode == "PC" ? '100%' : tree.value.container.height + 'px',
  marginTop: tree.value.mode == "PC" ? '' : 50 + 'px',
  ...style
}));
</script>

<style scoped lang="scss">
.container {
  overflow: hidden;
  .upper {
    height: 50px;
    box-shadow: var(--el-box-shadow-light);
    line-height: 48px;
    padding-left: 10px;
    background-color: white;
  }

  .upper-next {
    padding: 20px 0;
    background-color: #f6f6f6;
  }

  .preview-page {
    box-shadow: var(--el-box-shadow);
    background-color: white;
    min-height: 88vh;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>