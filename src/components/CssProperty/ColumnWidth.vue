<template>
  <ExampleText class="demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "column-width",
  components: {
    ExampleText,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: column-width 0.7s ease-out;
  column-width: 80px;

  &:hover {
    column-width: 160px;
  }
}
</style>
