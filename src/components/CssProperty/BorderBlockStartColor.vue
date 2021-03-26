<template>
  <ExampleBox class="demo">lorem ipsum</ExampleBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "border-block-start-color",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: border-block-start-color 0.7s ease-out;
  writing-mode: vertical-rl;
  border-block-start-width: 30px;

  &:hover {
    border-block-start-color: orange;
  }
}
</style>
