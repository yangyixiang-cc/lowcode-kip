<template>
  <div class="button-box" :style="customStyle">
    <el-button :type="attr['type']" :plain="attr['plain']" :icon="attr['icon']" :disabled="attr['disabled']"
               :size="attr['size']" :round="isRound" :circle="isCircle" @click="buttonClick">
      {{ attr['text'] }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {ElMessage} from "element-plus";
import utils from "@/utils/tools"

const props = defineProps<{
  data: Object
}>();

const attr = computed(() => utils.deepCopy(props.data['base']))
const isRound = computed(() => props.data['base']['shape'] === 'round')
const isCircle = computed(() => props.data['base']['shape'] === 'circle')

const customStyle = computed(() => {
  const styleData = props.data['style'][0]
  let styleObj = {};
  styleObj[styleData['attr']] = styleData['val'];
  return styleObj;
})
const action = computed(() => props.data['clickAction'])

const buttonClick = function () {
  ElMessage({
    message: props.data['clickAction']['message'],
    type: props.data['clickAction']['messageType'],
    showClose: props.data['clickAction']['showClose']
  })
}
</script>

<style scoped>
.button-box {
  margin: 10px;
}
</style>