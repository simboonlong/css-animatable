<template>
  <ExampleBox class="aspect-3-2 border-8 demo minor mb-2" />
  <ExampleBox class="aspect-3-2 border-8 demo over" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default defineComponent({
  name: "border-width",
  components: {
    ExampleBox,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: border-width 0.7s ease-out;
}

.minor {
  &:hover {
    border-width: 20px;
  }
}

.over {
  &:hover {
    border-width: 200px;
  }
}
</style>
