<template>
  <ExampleBox class="demo">lorem ipsum</ExampleBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "border-block-start-width",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: border-block-start-width 0.7s ease-out;
  writing-mode: vertical-rl;

  &:hover {
    border-block-start-width: 30px;
  }
}
</style>
