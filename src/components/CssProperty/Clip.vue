<template>
  <div class="relative w-full h-48">
    <img class="demo" src="./../../assets/hills.jpg" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "clip",
});
</script>

<style scoped lang="scss">
.demo {
  position: absolute;
  transition: clip 0.7s ease-out;
  clip: rect(0, 200px, 100px, 0);

  &:hover {
    clip: rect(50px, 300px, 200px, 50px);
  }
}
</style>
