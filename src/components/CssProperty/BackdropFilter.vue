<template>
  <ExampleImage class="bg-cover">
    <div class="absolute top-4 left-4 w-48 h-32 demo"></div>
  </ExampleImage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleImage from "@/components/Example/ExampleImage.vue";

export default defineComponent({
  name: "backdrop-filter",
  components: {
    ExampleImage,
  },
});
</script>

<style scoped lang="scss">
.demo {
  background-color: rgba(0, 0, 0, 0.4); // for demo purposes
  transition: backdrop-filter 0.7s ease-out;
  backdrop-filter: blur(0);

  &:hover {
    backdrop-filter: blur(5px);
  }
}
</style>
