<template>
  <h1 class="demo title text-center mb-2">Lorem ipsum</h1>
  <h1 class="demo title text-center negative mb-2">Lorem ipsum</h1>
  <ExampleText class="demo text" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleText from "@/components/Example/ExampleText.vue";

export default defineComponent({
  name: "letter-spacing",
  components: { ExampleText },
});
</script>

<style scoped lang="scss">
.demo {
  transition: letter-spacing 0.7s ease-out;
}

.text {
  &:hover {
    letter-spacing: 2px;
  }
}

.title {
  &:hover {
    letter-spacing: 8px;
  }
}

.negative {
  letter-spacing: -24px;

  &:hover {
    letter-spacing: 8px;
  }
}
</style>
