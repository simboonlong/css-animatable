<template>
  <ExampleBox class="w-full h-40 example">
    <div class="w-1/3 h-1/3 bg-yellow-500"></div>
    <div class="w-1/3 h-1/3 bg-yellow-600"></div>
    <div class="w-1/3 h-1/3 bg-yellow-700"></div>
  </ExampleBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "align-items",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.example {
  transition: align-items 0.7s ease-out;
  display: flex;
  align-items: flex-start;

  &:hover {
    align-items: flex-end;
  }
}
</style>
