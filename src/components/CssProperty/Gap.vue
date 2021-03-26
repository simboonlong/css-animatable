<template>
  <div class="flex flex-wrap demo">
    <div class="example bg-yellow-100">lorem ipsum</div>
    <div class="example bg-yellow-200">lorem ipsum</div>
    <div class="example bg-yellow-300">lorem ipsum</div>
    <div class="example bg-yellow-400">lorem ipsum</div>
    <div class="example bg-yellow-500">lorem ipsum</div>
    <div class="example bg-yellow-600">lorem ipsum</div>
    <div class="example bg-yellow-700">lorem ipsum</div>
    <div class="example bg-yellow-800">lorem ipsum</div>
    <div class="example bg-yellow-900">lorem ipsum</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "gap",
});
</script>

<style scoped lang="scss">
.demo {
  transition: gap 0.7s ease-out;
  gap: 0;

  &:hover {
    gap: 16px 60px;
  }
}

.example {
  flex: 0 1 auto;
}
</style>
