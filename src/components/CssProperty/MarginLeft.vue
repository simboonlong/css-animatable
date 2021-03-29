<template>
  <ExampleText class="demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "margin-left",
  components: { ExampleText },
});
</script>

<style scoped lang="scss">
.demo {
  transition: margin-left 0.7s ease-out;
  margin-left: 0;

  &:hover {
    margin-left: 48px;
  }
}
</style>
