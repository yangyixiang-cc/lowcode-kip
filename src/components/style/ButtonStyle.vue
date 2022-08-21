<template>
  <div>
    <el-form :model="form" label-width="100px">
      <el-form-item label="按钮类型">
        <el-select v-model="form['base']['type']">
          <el-option label="普通按钮" value=""></el-option>
          <el-option label="主要按钮" value="primary"></el-option>
          <el-option label="成功按钮" value="success"></el-option>
          <el-option label="信息按钮" value="info"></el-option>
          <el-option label="警告按钮" value="warning"></el-option>
          <el-option label="危险按钮" value="danger"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="按钮文本">
        <el-input v-model="form['base']['text']"/>
      </el-form-item>
      <el-form-item label="朴素按钮">
        <el-radio-group v-model="form['base']['plain']">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="按钮尺寸">
        <el-select v-model="form['base']['size']">
          <el-option label="大" value="large"></el-option>
          <el-option label="中" value="default"></el-option>
          <el-option label="小" value="small"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="按钮形状">
        <el-select v-model="form['base']['shape']">
          <el-option label="普通" value=""></el-option>
          <el-option label="圆角" value="round"></el-option>
          <el-option label="圆形" value="circle"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="图标">
        <el-select v-model="form['base']['icon']">
          <el-option label="无" value=""></el-option>
          <el-option label="Check" value="CircleCheck"></el-option>
          <el-option label="Warning" value="Warning"></el-option>
          <el-option label="Close" value="CircleClose"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="禁用按钮">
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
      <el-form-item label="提示信息">
        <el-input v-model="form['clickAction']['message']" type="textarea"/>
      </el-form-item>
      <el-form-item label="提示类型">
        <el-select v-model="form['clickAction']['messageType']">
          <el-option label="成功提示" value="success"></el-option>
          <el-option label="信息提示" value="info"></el-option>
          <el-option label="警告提示" value="warning"></el-option>
          <el-option label="危险提示" value="danger"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="关闭提示按钮">
        <el-radio-group v-model="form['clickAction']['showClose']">
          <el-radio :label="true">开启</el-radio>
          <el-radio :label="false">关闭</el-radio>
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