<template>
  <div class="relative bg-yellow-300">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExampleBox",
});
</script>
