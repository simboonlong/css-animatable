<template>
  <div class="flex bg-yellow-300">
    <div class="bg-yellow-500 demo"></div>
    <div class="example"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "flex-grow",
});
</script>

<style scoped lang="scss">
.example {
  height: 40px;
  flex: 1 1 auto;
}

.demo {
  transition: flex-grow 0.7s ease-out;
  flex-grow: 1;

  &:hover {
    flex-grow: 3;
  }
}
</style>
