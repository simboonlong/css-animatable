<template>
  <ExampleText class="demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "font-weight",
  components: {
    ExampleText,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: font-weight 0.7s ease-out;

  &:hover {
    font-weight: 900;
  }
}
</style>
