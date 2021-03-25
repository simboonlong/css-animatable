<template>
  <ExampleText class="demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "column-count",
  components: {
    ExampleText,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: column-count 0.7s ease-out;
  column-count: 4;

  &:hover {
    column-count: 1;
  }
}
</style>
