<template>
  <ExampleImage class="bg-cover demo"> </ExampleImage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleImage from "@/components/Example/ExampleImage.vue";

export default defineComponent({
  name: "backdrop-position",
  components: {
    ExampleImage,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: background-position 0.7s ease-out;
  background-position: 50% 50%;

  &:hover {
    background-position: 0 -640px;
  }
}
</style>
