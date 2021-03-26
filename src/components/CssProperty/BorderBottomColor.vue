<template>
  <ExampleBox class="demo">lorem ipsum</ExampleBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "border-bottom-color",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: border-bottom-color 0.7s ease-out;
  border-bottom-width: 30px;

  &:hover {
    border-bottom-color: orange;
  }
}
</style>
