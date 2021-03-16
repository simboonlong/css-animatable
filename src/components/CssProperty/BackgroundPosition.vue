<template>
  <div>
    <DemoImage class="bg-cover demo"> </DemoImage>
  </div>
</template>

<script>
import DemoImage from "@/components/DemoImage.vue";

export default {
  name: "backdrop-position",
  components: {
    DemoImage,
  },
};
</script>

<style scoped lang="scss">
.demo {
  transition: background-position 0.7s ease-out;
  background-position: 50% 50%;

  &:hover {
    background-position: 0 -300px;
  }
}
</style>
