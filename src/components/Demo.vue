<template>
  <div class="css-property border-t py-16">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full lg:w-2/5 px-4">
        <h3 class="font-bold mb-4 leading-6">
          <span class="text-gray-400 mr-1">{{ demoIndex + 1 }}.</span>
          <a :href="data.mdn_url" target="_blank" rel="noopener noreferrer">{{
            name
          }}</a>
        </h3>
        <div class="text-gray-400">
          <button
            class="text-xs font-bold tracking-wider uppercase transition duration-200 ease border rounded px-2 py-1  hover:bg-gray-800 hover:text-white mr-1"
            :class="isExpand ? 'text-white bg-gray-800' : ''"
            @click="toggleData"
          >
            Data
          </button>
          <a
            v-if="componentNames.includes(pascalCase(name))"
            class="text-xs font-bold tracking-wider uppercase transition duration-200 ease border rounded px-2 py-1  hover:bg-gray-800 hover:text-white text-gray-400 no-underline"
            :href="
              'https://github.com/simboonlong/css-animatable/blob/master/src/components/CssProperty/' +
                pascalCase(name) +
                '.vue'
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="inline-block align-middle mr-1">Demo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-external-link inline-block align-middle"
            >
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
              ></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line></svg
          ></a>
        </div>
        <pre
          class="z-10 text-xs bg-gray-800 text-white p-4 rounded my-1 absolute shadow-lg max-w-lg"
          :class="isExpand ? '' : 'hidden'"
          >{{ data }}</pre
        >
      </div>
      <div class="w-full lg:w-3/5 px-4">
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
import pascalcase from "pascalcase";

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
    demoIndex: Number,
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
    pascalCase(str) {
      return pascalcase(str);
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
