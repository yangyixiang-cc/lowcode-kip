<template>
  <div>
    <div class="upper">
      <el-button type="danger" @click="$router.back()">返回</el-button>
      <el-button @click="copyToClipboard(state.json)">复制JSON到剪贴板</el-button>
    </div>
    <vue-jsoneditor
        height="400"
        :mode="mode"
        v-model:json="state.json"
        :readOnly="true"
    />
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';
import {userMainStore} from "@/store";
import {storeToRefs} from "pinia";
import VueJsoneditor from 'vue3-ts-jsoneditor';
import useClipboard from 'vue-clipboard3'
import {ElMessage} from "element-plus";

const mainStore = userMainStore();
const {tree, tList} = storeToRefs(mainStore);

const jsonObject = tree.value;
jsonObject['components'] = tList.value

const state = reactive({
  json: jsonObject
})

const mode = ref('tree');

const {toClipboard} = useClipboard()

const copyToClipboard = async (json) => {
  /**
   * 将生成的JSON复制到剪贴板
   *
   * @param {String} json 要复制的JSON字符串
   */
  try {
    await toClipboard(JSON.stringify(json))
    ElMessage({
      type: "success",
      message: "已复制到剪贴板"
    })
  } catch (e) {
    ElMessage({
      type: "error",
      message: `错误: ${e}`
    })
  }
}
</script>

<style scoped>
.upper {
  height: 50px;
  box-shadow: var(--el-box-shadow-light);
  line-height: 48px;
  padding-left: 10px;
  background-color: white;
}
</style>