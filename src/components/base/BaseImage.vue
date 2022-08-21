<template>
  <div class="image-container" :style="{height: `${props.data['base']['height']}px`}">
    <el-image :src="url" :style="size" :fit="fit" :class="alignment" :alt="alt"></el-image>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  data: Object
}>();

const url = computed(() => props.data['base']['url'])
const alt = computed(() => props.data['base']['alt'])

const size = computed(() => {
  return {
    width: `${props.data['base']['width']}px`,
    height: `${props.data['base']['height']}px`
  }
})
const fit = computed(() => props.data['base']['fit'])

const alignment = computed(() => {
  switch (props.data['base']['alignment']) {
    case 'center':
      return 'align-center'
    case 'right':
      return 'align-right'
    default:
      return ''
  }
})
</script>

<style scoped lang="scss">
.image-container {
  position: relative;
  width: auto;
  margin: 10px;
}

.align-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.align-right {
  position: absolute;
  right: 0;
}
</style>