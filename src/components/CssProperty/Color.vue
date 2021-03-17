<template>
  <ExampleText class="demo"> </ExampleText>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "color",
  components: {
    ExampleText,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: color 0.7s ease-out;

  &:hover {
    color: orange;
  }
}
</style>
