<template>
  <ExampleImage class="bg-cover demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleImage from "@/components/Example/ExampleImage.vue";

export default defineComponent({
  name: "background-repeat",
  components: {
    ExampleImage,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: background-repeat 0.7s ease-out;
  background-size: 60px 40px;
  background-repeat: repeat;

  &:hover {
    background-repeat: repeat-y;
  }
}
</style>
