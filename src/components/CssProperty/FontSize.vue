<template>
  <ExampleText class="demo"> </ExampleText>
</template>

<script>
import ExampleText from "@/components/Example/ExampleText.vue";

export default {
  name: "font-size",
  components: {
    ExampleText,
  },
};
</script>

<style scoped lang="scss">
.demo {
  transition: font-size 0.7s ease-out;

  &:hover {
    font-size: 16px;
  }
}
</style>
