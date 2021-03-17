<template>
  <div class="flex bg-yellow-300">
    <div class="bg-yellow-500 demo"></div>
    <div class="example"></div>
  </div>
</template>

<script>
export default {
  name: "flex-shrink",
};
</script>

<style scoped lang="scss">
.example {
  height: 40px;
  flex: 1 1 100%;
}

.demo {
  transition: flex-shrink 0.7s ease-out;
  flex-shrink: 0;
  flex-basis: 100%;

  &:hover {
    flex-shrink: 1;
  }
}
</style>
