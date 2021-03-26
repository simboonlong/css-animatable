<template>
  <ExampleBox class="demo">lorem ipsum</ExampleBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "block-size",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: block-size 0.7s ease-out;
  block-size: 40px;

  &:hover {
    block-size: 120px;
  }
}
</style>
