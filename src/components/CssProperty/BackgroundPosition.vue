<template>
  <ExampleImage class="bg-cover demo y mb-2" />
  <ExampleImage class="bg-cover demo x" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleImage from "@/components/Example/ExampleImage.vue";

export default defineComponent({
  name: "background-position",
  components: {
    ExampleImage,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: background-position 0.7s ease-out;
  background-position: 50% 50%;
}

.x {
  &:hover {
    background-position: 640px 0;
  }
}

.y {
  &:hover {
    background-position: 0 -640px;
  }
}
</style>
