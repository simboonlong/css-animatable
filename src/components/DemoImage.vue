<template>
  <div class="relative w-72 h-48 hills">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DemoImage",
};
</script>

<style scoped lang="scss">
.hills {
  background-image: url("./../assets/hills.jpg");
}
</style>
