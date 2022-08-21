<template>
  <div>
    <div class="upper">
      <el-button type="danger" @click="$router.back()">返回</el-button>
      <el-button @click="importJsonToPage(editorContent)">导入JSON</el-button>
    </div>
    <vue-jsoneditor
        height="400"
        :mode="mode"
        v-model:json="state.json"
        @change="onContextChange"
    />
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';
import {userMainStore} from "@/store";
import VueJsoneditor from 'vue3-ts-jsoneditor';
import {ElMessage} from "element-plus";
import router from "@/router";
import utils from '@/utils/tools'

const mainStore = userMainStore();

const state = reactive({
  json: {}
});

const mode = ref('text');

function importJsonToPage(json): void {
  try {
    const fomatJson: Object = JSON.parse(json)
    const keyArr: Array<string> = ['mode', 'title', 'container', 'components']
    const jsonKeys: Array<string> = Object.keys(fomatJson)
    if (!utils.arrayEquals(keyArr, jsonKeys)) {
      ElMessage({
        type: 'error',
        message: '导入JSON格式有误'
      })
      return
    } else {
      mainStore.setTreeJson(fomatJson)
      router.back()
    }
  } catch (e) {
    console.error(e)
    ElMessage({
      type: 'error',
      message: '导入JSON格式有误'
    })
  }
}

const editorContent = ref('');

function onContextChange(content) {
  editorContent.value = content['text']
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