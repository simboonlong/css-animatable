<template>
  <ExampleBox class="w-full h-40 example">
    <div class="w-1/3 bg-yellow-500 demo">Lorem ipsum</div>
    <div class="w-1/3 bg-yellow-600 demo">Lorem ipsum</div>
    <div class="w-1/3 bg-yellow-700 demo">Lorem ipsum</div>
  </ExampleBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "align-self",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.example {
  transition: align-self 0.7s ease-out;
  display: flex;

  &:hover {
    .demo {
      align-self: stretch;
    }
  }
}

.demo {
  align-self: center;
}
</style>
