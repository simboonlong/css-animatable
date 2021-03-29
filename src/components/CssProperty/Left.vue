<template>
  <ExampleBox class="aspect-3-2 example">
    <div class="absolute w-1/2 h-1/2 bg-yellow-500 demo"></div>
  </ExampleBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "left",
  components: { ExampleBox },
});
</script>

<style scoped lang="scss">
.example {
  &:hover {
    .demo {
      left: 50%;
    }
  }
}

.demo {
  transition: left 0.7s ease-out;
  left: 0;
}
</style>
