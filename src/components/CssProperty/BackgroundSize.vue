<template>
  <ExampleImage class="demo"> </ExampleImage>
</template>

<script>
import ExampleImage from "@/components/Example/ExampleImage.vue";

export default {
  name: "background-size",
  components: {
    ExampleImage,
  },
};
</script>

<style scoped lang="scss">
.demo {
  transition: background-size 0.7s ease-out;
  background-size: 100%;

  &:hover {
    background-size: 20%;
  }
}
</style>
