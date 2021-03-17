<template>
  <div class="relative aspect-3-2 hills">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ExampleImage",
};
</script>

<style scoped lang="scss">
.hills {
  background-image: url("./../../assets/hills.jpg");
}
</style>
