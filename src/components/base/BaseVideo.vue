<template>
  <div class="video-container">
    <video :src="url" :width="width" :height="height" controls class="align-center">
      您的浏览器不支持 video 标签。
    </video>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  data: Object
}>();

const width = computed((): string => props.data['base']['width'].toString());
const height = computed((): string => props.data['base']['height'].toString());
const url = computed((): string => props.data['base']['url']);
</script>

<style scoped lang="scss">
.video-container {
  width: auto;
  margin: 10px;
}

.align-center {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>