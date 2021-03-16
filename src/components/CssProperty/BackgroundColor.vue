<template>
  <div>
    <DemoBox class="demo"> </DemoBox>
  </div>
</template>

<script>
import DemoBox from "@/components/DemoBox.vue";

export default {
  name: "background-color",
  components: {
    DemoBox,
  },
};
</script>

<style scoped lang="scss">
.demo {
  transition: background-color 0.7s ease-out;

  &:hover {
    background-color: orange;
  }
}
</style>
