<template>
  <ExampleImage class="demo"> </ExampleImage>
</template>

<script>
import ExampleImage from "@/components/Example/ExampleImage.vue";

export default {
  name: "clip-path",
  components: {
    ExampleImage,
  },
};
</script>

<style scoped lang="scss">
.demo {
  transition: clip-path 0.7s ease-out;
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);

  &:hover {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
}
</style>
