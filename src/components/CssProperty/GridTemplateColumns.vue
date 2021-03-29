<template>
  <div class="grid demo">
    <div class="bg-yellow-100">lorem ipsum</div>
    <div class="bg-yellow-200">lorem ipsum</div>
    <div class="bg-yellow-300">lorem ipsum</div>
    <div class="bg-yellow-400">lorem ipsum</div>
    <div class="bg-yellow-500">lorem ipsum</div>
    <div class="bg-yellow-600">lorem ipsum</div>
    <div class="bg-yellow-700">lorem ipsum</div>
    <div class="bg-yellow-800">lorem ipsum</div>
    <div class="bg-yellow-900">lorem ipsum</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "grid-template-columns",
});
</script>

<style scoped lang="scss">
.demo {
  transition: grid-template-columns 0.7s ease-out;
  grid-template-columns: 80px 1fr;

  &:hover {
    grid-template-columns: 1fr 2fr;
  }
}
</style>
