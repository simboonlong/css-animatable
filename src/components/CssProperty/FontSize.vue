<template>
  <ExampleText class="demo"> </ExampleText>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "font-size",
  components: {
    ExampleText,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: font-size 0.7s ease-out;

  &:hover {
    font-size: 16px;
  }
}
</style>
