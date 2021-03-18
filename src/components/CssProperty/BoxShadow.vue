<template>
  <ExampleBox class="aspect-3-2 demo"> </ExampleBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "box-shadow",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: box-shadow 0.7s ease-out;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
}
</style>
