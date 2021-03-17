<template>
  <ExampleText class="demo"> </ExampleText>
</template>

<script>
import ExampleText from "@/components/Example/ExampleText.vue";

export default {
  name: "column-rule-color",
  components: {
    ExampleText,
  },
};
</script>

<style scoped lang="scss">
.demo {
  transition: column-rule-width 0.7s ease-out;
  column-count: 4;
  column-rule-style: dotted;
  column-rule-color: grey;
  column-rule-width: 2px;

  &:hover {
    column-rule-width: 16px;
  }
}
</style>
