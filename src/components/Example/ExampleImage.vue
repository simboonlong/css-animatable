<template>
  <div class="relative aspect-3-2 hills">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExampleImage",
});
</script>

<style scoped lang="scss">
.hills {
  background-image: url("./../../assets/hills.jpg");
}
</style>
