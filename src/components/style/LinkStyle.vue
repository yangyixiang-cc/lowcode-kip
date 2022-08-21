<template>
  <div>
    <el-form :model="form" label-width="100px">
      <el-form-item label="类型">
        <el-select v-model="form['base']['type']">
          <el-option label="普通按钮" value=""></el-option>
          <el-option label="主要按钮" value="primary"></el-option>
          <el-option label="成功按钮" value="success"></el-option>
          <el-option label="信息按钮" value="info"></el-option>
          <el-option label="警告按钮" value="warning"></el-option>
          <el-option label="危险按钮" value="danger"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="链接">
        <el-input v-model="form['clickAction']['url']"/>
      </el-form-item>
      <el-form-item label="文本">
        <el-input v-model="form['base']['text']"/>
      </el-form-item>
      <el-form-item label="尺寸">
        <el-select v-model="form['base']['size']">
          <el-option label="大" value="large"></el-option>
          <el-option label="中" value="default"></el-option>
          <el-option label="小" value="small"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="链接图标">
        <el-radio-group v-model="form['base']['icon']">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="禁用">
        <el-radio-group v-model="form['base']['disabled']">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="对齐方式">
        <el-radio-group v-model="form['style'][0]['val']">
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