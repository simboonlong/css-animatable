<template>
  <ExampleText class="demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "line-height",
  components: { ExampleText },
});
</script>

<style scoped lang="scss">
.demo {
  transition: line-height 0.7s ease-out;
  line-height: 0;

  &:hover {
    line-height: 1.5;
  }
}
</style>
