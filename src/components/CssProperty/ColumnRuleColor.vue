<template>
  <ExampleText class="demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "column-rule-color",
  components: {
    ExampleText,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: column-rule-color 0.7s ease-out;
  column-count: 4;
  column-rule-style: dotted;
  column-rule-color: grey;
  column-rule-width: 2px;

  &:hover {
    column-rule-color: orange;
  }
}
</style>
