<template>
  <ExampleText class="demo"> </ExampleText>
</template>

<script>
import ExampleText from "@/components/Example/ExampleText.vue";

export default {
  name: "column-count",
  components: {
    ExampleText,
  },
};
</script>

<style scoped lang="scss">
.demo {
  transition: column-count 0.7s ease-out;
  column-count: 4;

  &:hover {
    column-count: 1;
  }
}
</style>
