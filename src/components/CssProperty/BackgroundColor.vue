<template>
  <ExampleBox class="demo"> </ExampleBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "background-color",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: background-color 0.7s ease-out;

  &:hover {
    background-color: orange;
  }
}
</style>
