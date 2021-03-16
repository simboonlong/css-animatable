<template>
  <div>
    <DemoBox class="border-8 border-black mb-2 demo-color"> </DemoBox>
    <DemoBox class="border-8 border-black mb-2 demo-radius"> </DemoBox>
    <DemoBox class="border-8 border-black demo-radius-corner"> </DemoBox>
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
.demo-color {
  transition: border-color 0.7s ease-out;

  &:hover {
    border-color: orange;
  }
}

.demo-radius {
  transition: border-radius 0.7s ease-out;
  border-style: dotted;

  &:hover {
    border-radius: 64px;
  }
}

.demo-radius-corner {
  transition: border-radius 0.7s ease-out;
  border-style: double;

  &:hover {
    border-top-right-radius: 64px;
    border-bottom-left-radius: 64px;
  }
}
</style>
