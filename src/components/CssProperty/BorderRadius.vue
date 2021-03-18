<template>
  <ExampleBox class="aspect-3-2 border-8 border-black mb-2 demo-radius">
  </ExampleBox>
  <ExampleBox class="aspect-3-2 border-8 border-black demo-radius-corner">
  </ExampleBox>
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
.demo-radius {
  transition: border-radius 0.7s ease-out;
  border-style: dotted;

  &:hover {
    border-radius: 64px;
  }
}

.demo-radius-corner {
  transition: border-radius 0.7s ease-out;
  border-style: double;

  &:hover {
    border-top-right-radius: 64px;
    border-bottom-left-radius: 64px;
  }
}
</style>
