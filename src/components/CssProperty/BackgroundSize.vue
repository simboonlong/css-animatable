<template>
  <ExampleImage class="demo expand mb-2" />
  <ExampleImage class="demo contract" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleImage from "@/components/Example/ExampleImage.vue";

export default defineComponent({
  name: "background-size",
  components: {
    ExampleImage,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: background-size 0.7s ease-out;
}

.expand {
  background-position: center;
  background-size: 100%;

  &:hover {
    background-size: 200%;
  }
}

.contract {
  background-position: center;
  background-size: 100%;

  &:hover {
    background-size: 20%;
  }
}
</style>
