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
  name: "grid-template-rows",
});
</script>

<style scoped lang="scss">
.demo {
  transition: grid-template-rows 0.7s ease-out;
  grid-template-rows: 1fr;

  &:hover {
    grid-template-rows: 1fr 3fr 1fr 6fr;
  }
}
</style>
