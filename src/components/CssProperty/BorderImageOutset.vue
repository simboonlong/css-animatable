<template>
  <ExampleBox class="demo">lorem ipsum</ExampleBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "border-image-outset",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: border-image-outset 0.7s ease-out;
  border-width: 48px;
  border-image: url("./../../assets/hills.jpg");
  border-image-outset: 0;

  &:hover {
    border-image-outset: 24px;
  }
}
</style>
