<template>
  <ExampleText class="demo"> </ExampleText>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "column-gap",
  components: {
    ExampleText,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: column-gap 0.7s ease-out;
  column-count: 2;
  column-gap: 8px;

  &:hover {
    column-gap: 80px;
  }
}
</style>
