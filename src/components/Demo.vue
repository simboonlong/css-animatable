<template>
  <div class="css-property border-t py-16">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full lg:w-1/3 px-4">
        <h3 class="text-lg font-bold mb-4 leading-6">
          <span class="text-gray-400">{{ number + 1 }}.</span> {{ name }}
        </h3>
        <div class="text-gray-400">
          <button
            class="text-xs font-bold tracking-wider uppercase transition duration-200 ease border rounded px-2 py-1  hover:bg-gray-800 hover:text-white"
            :class="isExpand ? 'text-white bg-gray-800' : ''"
            @click="toggleData"
          >
            data
          </button>
        </div>
        <pre
          class="z-10 text-xs bg-gray-800 text-white p-4 rounded my-1 absolute shadow-lg max-w-lg"
          :class="isExpand ? '' : 'hidden'"
          >{{ data }}</pre
        >
      </div>
      <div class="w-full lg:w-2/3 px-4">
        <div class="py-4 lg:py-0">
          <component :is="name"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// https://stackoverflow.com/questions/65378635/vue-3-use-dynamic-component-with-dynamic-imports
import { defineAsyncComponent } from "vue";

const requireContext = require.context(
  "@/components/CssProperty",
  true,
  /\.vue$/i,
  "sync"
);

const componentNames = requireContext
  .keys()
  .map((file) => file.replace(/(^.\/)|(\.vue$)/g, ""));

let components = {};

componentNames.forEach((component) => {
  components[component] = defineAsyncComponent(() =>
    import("@/components/CssProperty/" + component + ".vue")
  );
});

export default {
  name: "Demo",
  props: {
    name: String,
    data: Object,
    number: String,
  },
  components,
  data() {
    return {
      componentNames,
      isExpand: false,
    };
  },
  methods: {
    toggleData() {
      this.isExpand = !this.isExpand;
    },
  },
};
</script>

<style scoped lang="scss">
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
