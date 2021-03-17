<template>
  <div class="flex bg-yellow-300">
    <div class="bg-yellow-500 demo"></div>
    <div class="example"></div>
  </div>
</template>

<script>
export default {
  name: "flex-basis",
};
</script>

<style scoped lang="scss">
.example {
  height: 40px;
  flex: 1 1 auto;
}

.demo {
  transition: flex-basis 0.7s ease-out;
  flex-basis: 50%;

  &:hover {
    flex-basis: 100%;
  }
}
</style>
