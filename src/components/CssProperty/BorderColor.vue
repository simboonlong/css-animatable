<template>
  <ExampleBox class="aspect-3-2 border-8 border-black demo"> </ExampleBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "border-color",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: border-color 0.7s ease-out;

  &:hover {
    border-color: orange;
  }
}
</style>
