<template>
  <ExampleText class="demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "max-width",
  components: { ExampleText },
});
</script>

<style scoped lang="scss">
.demo {
  transition: max-width 0.7s ease-out;
  max-width: 100%;

  &:hover {
    max-width: 50%;
  }
}
</style>
