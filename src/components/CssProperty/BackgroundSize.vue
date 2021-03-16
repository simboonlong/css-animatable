<template>
  <div>
    <DemoImage class="demo"> </DemoImage>
  </div>
</template>

<script>
import DemoImage from "@/components/DemoImage.vue";

export default {
  name: "background-size",
  components: {
    DemoImage,
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
