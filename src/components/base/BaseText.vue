<template>
  <div class="text-box" :style="customStyle" v-html="text"></div>
</template>

<script setup lang="ts">
import {computed} from '@vue/reactivity';

const props = defineProps<{
  data: Object
}>();

const text = computed((): string => {
  let arr: Array<string> = props.data['base']['val'].split('\n');
  let line: Array<string> = arr.map((i: string): string => `<p>${i}</p>`);
  return line.join('');
});

const customStyle = computed((): Object => {
  const styleArray: Array<Object> = props.data['style']
  let styleObject: Object = {}
  styleArray.forEach((item: Object): void => {
    styleObject[item['attr']] = item['val']
  })
  return styleObject;
})
</script>

<style lang="scss" scoped>
.text-box {
  margin: 10px;
}
</style>