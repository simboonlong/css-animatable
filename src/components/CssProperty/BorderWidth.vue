<template>
  <ExampleBox class="border-8 border-black demo"> </ExampleBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "border-width",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: border-width 0.7s ease-out;

  &:hover {
    border-width: 40px;
  }
}
</style>
