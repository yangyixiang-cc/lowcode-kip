<template>
  <div class="link-box" :style="customStyle">
    <el-button :type="attr['type']" link :size="attr['size']" :disabled="attr['disabled']" :icon="icon"
               @click="toLink(url)">
      {{ text }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import utils from "@/utils/tools";

const props = defineProps<{
  data: Object
}>();

const attr = computed(() => utils.deepCopy(props.data['base']))
const url = computed(() => props.data['clickAction']['url'])
const text = computed(() => {
  return props.data['base']['text'] !== '' ? props.data['base']['text'] : props.data['clickAction']['url'];
})
const icon = computed(() => {
  return props.data['base']['icon'] ? 'Link' : ''
})

const customStyle = computed(() => {
  const styleData = props.data['style'][0]
  let styleObj = {};
  styleObj[styleData['attr']] = styleData['val'];
  return styleObj;
})

function toLink(url: string): void {
  window.open(url);
}
</script>

<style scoped lang="scss">
.link-box {
  margin: 10px;
}
</style>