<template>
  <div>
    <el-form :model="form" label-width="100px">
      <el-form-item label="图片链接">
        <el-input v-model="form['base']['url']"></el-input>
      </el-form-item>
      <el-form-item label="图片提示">
        <el-input v-model="form['base']['alt']"></el-input>
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
      <el-form-item label="适应方式">
        <el-select v-model="form['base']['fit']">
          <el-option v-for="(item, index) in fits" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="对齐方式">
        <el-radio-group v-model="form['base']['alignment']">
          <el-radio-button label="left">
            <align-left-outlined/>
          </el-radio-button>
          <el-radio-button label="center">
            <align-center-outlined/>
          </el-radio-button>
          <el-radio-button label="right">
            <align-right-outlined/>
          </el-radio-button>
        </el-radio-group>
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