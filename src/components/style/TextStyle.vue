<template>
  <div>
    <el-form :model="form" label-width="100px">
      <el-form-item label="文本内容">
        <el-input type="textarea" v-model="form['base']['val']"/>
      </el-form-item>
      <el-form-item label="字号">
        <el-select v-model="form['style'][0]['val']">
          <el-option v-for="(item, index) in fontSizeArr" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="字体粗细">
        <el-select v-model="form['style'][1]['val']">
          <el-option label="Light" value="lighter"></el-option>
          <el-option label="Normal" value="normal"></el-option>
          <el-option label="Bold" value="bold"></el-option>
          <el-option label="Bolder" value="bolder"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="对齐方式">
        <el-radio-group v-model="form['style'][5]['val']">
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
      <el-form-item label="下划线">
        <el-checkbox v-model="form['style'][2]['val']" true-label="underline" false-label="none" border>
          <underline-outlined/>
        </el-checkbox>
      </el-form-item>
      <el-form-item label="字体颜色">
        <el-color-picker v-model="form['style'][3]['val']"></el-color-picker>
      </el-form-item>
      <el-form-item label="背景颜色">
        <el-color-picker v-model="form['style'][4]['val']"></el-color-picker>
      </el-form-item>
    </el-form>
    <div style="text-align: center">
      <el-button type="primary" icon="Refresh" @click="updateConf(form, props.index)">更新</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import {userMainStore} from "@/store";
import utils from "@/utils/tools"

const props = defineProps<{
  data: Object,
  index: number
}>();

const mainStore = userMainStore();

const form = reactive(utils.deepCopy(props.data))

const color = ref('');

const fontSizeArr: Array<string> = []

for (let i: number = 12; i <= 30; i++) {
  fontSizeArr.push(`${i}px`);
}

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
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  UnderlineOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UnderlineOutlined,
    AlignLeftOutlined,
    AlignCenterOutlined,
    AlignRightOutlined
  },
});
</script>

<style scoped>

</style>