<template>
  <ExampleText class="demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "max-height",
  components: { ExampleText },
});
</script>

<style scoped lang="scss">
.demo {
  transition: max-height 0.7s ease-out;
  max-height: 80px;
  overflow: hidden;

  &:hover {
    max-height: 160px;
  }
}
</style>
