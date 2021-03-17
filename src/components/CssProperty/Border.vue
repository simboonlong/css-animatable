<template>
  <ExampleBox class="border-8 border-black mb-2 demo-color"> </ExampleBox>
  <ExampleBox class="border-8 border-black mb-2 demo-radius"> </ExampleBox>
  <ExampleBox class="border-8 border-black demo-radius-corner"> </ExampleBox>
</template>

<script>
import ExampleBox from "@/components/Example/ExampleBox.vue";

export default {
  name: "border",
  components: {
    ExampleBox,
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
