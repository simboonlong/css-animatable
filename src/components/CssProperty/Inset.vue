<template>
  <div class="w-full h-40 relative bg-yellow-500">
    <ExampleText class="demo absolute" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "inset",
  components: { ExampleText },
});
</script>

<style scoped lang="scss">
.demo {
  transition: inset 0.7s ease-out;
  inset: 0;

  &:hover {
    inset: 24px 40px;
  }
}
</style>
