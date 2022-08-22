<template>
  <el-dialog v-model="flog" title="页面配置">
    <el-form :model="tree" label-width="100px">
      <el-form-item label="页面标题">
        <el-input type="textarea" v-model="tree.title"/>
      </el-form-item>
      <el-form-item label="背景颜色">
        <el-color-picker v-model="tree.style[0].val"></el-color-picker>
      </el-form-item>
    </el-form>
    <template #footer>
            <span class="dialog-footer">
                <el-button @click="flog = false">取消</el-button>
                <el-button type="primary" @click="flog = false">确认</el-button>
            </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {userMainStore} from "@/store";
import {storeToRefs} from "pinia";

const mainStore = userMainStore();
const {tree} = storeToRefs(mainStore); // 解构并使数据动态化
const props = defineProps<{
  flog: boolean
}>();


</script>

<style scoped>
</style>