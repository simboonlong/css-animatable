<template>
  <ExampleBox class="demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "height",
  components: { ExampleBox },
});
</script>

<style scoped lang="scss">
.demo {
  transition: height 0.7s ease-out;
  height: 32px;

  &:hover {
    height: 80px;
  }
}
</style>
