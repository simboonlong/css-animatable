<template>
  <ExampleBox class="aspect-3-2 border-8 mb-2 demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "border-radius",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: border-radius 0.7s ease-out;
  border-style: dotted;

  &:hover {
    border-radius: 64px;
  }
}
</style>
