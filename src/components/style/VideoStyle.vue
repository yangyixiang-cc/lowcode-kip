<template>
  <div>
    <el-form :model="form" label-width="100px">
      <el-form-item label="视频链接">
        <el-input v-model="form['base']['url']"></el-input>
      </el-form-item>
      <el-form-item label="宽度">
        <el-input v-model="form['base']['width']" type="number">
          <template #append>px</template>
        </el-input>
      </el-form-item>
      <el-form-item label="高度">
        <el-input v-model="form['base']['height']" type="number">
          <template #append>px</template>
        </el-input>
      </el-form-item>
    </el-form>
    <div style="text-align: center">
      <el-button type="primary" icon="Refresh" @click="updateConf(form, props.index)">更新</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {userMainStore} from "@/store";
import utils from "@/utils/tools"

const props = defineProps<{
  data: Object,
  index: number
}>();

const mainStore = userMainStore();

const form = reactive(utils.deepCopy(props.data))
const fits: Array<string> = ['fill', 'contain', 'cover', 'none', 'scale-down']

function updateConf(conf: Object, index: number) {
  /**
   * 触发更新tList中对应组件配置的action
   *
   * @param {Object} conf 配置参数的Object对象
   * @param {number} index 组件在tList中的位置
   */
  mainStore.updateConfig(utils.deepCopy(conf), index);
}
</script>

<script lang="ts">
import {defineComponent} from 'vue';
import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    AlignLeftOutlined,
    AlignCenterOutlined,
    AlignRightOutlined
  },
});
</script>

<style scoped>

</style>