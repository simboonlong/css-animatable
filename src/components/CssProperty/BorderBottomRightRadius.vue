<template>
  <ExampleBox class="aspect-3-2 border-8 demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "border-bottom-right-radius",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: border-bottom-right-radius 0.7s ease-out;
  border-style: double;

  &:hover {
    border-bottom-right-radius: 64px;
  }
}
</style>
