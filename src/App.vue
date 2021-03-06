<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <header class="max-w-screen-2xl mx-auto px-8 py-6">
    <div class="max-w-md">
      <h1 class="text-4xl font-bold">CSS Animatable</h1>
      <h4 class="text-lg font-semibold mb-4">
        A place to get quick inspiration for css animations.
      </h4>
      <p>
        Data pulled from
        <a
          href="https://github.com/mdn/data/blob/master/css/properties.json"
          target="_blank"
          rel="noopener noreferrer"
          >mdn-data</a
        >.
        <br />
        *List of
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties"
          target="_blank"
          rel="noopener noreferrer"
          >animatable css properties</a
        >.
      </p>
    </div>
  </header>
  <main class="max-w-screen-2xl mx-auto px-8">
    <ul class="flex flex-wrap -mx-8">
      <li
        class="w-full lg:w-1/2 px-8"
        v-for="(value, key, index) in cssPropertiesFiltered"
        :key="index"
      >
        <Demo :name="key" :data="value" :demoIndex="index" />
      </li>
    </ul>
  </main>
  <footer class="bg-gray-100">
    <div
      class="max-w-screen-2xl mx-auto px-8 py-6 text-sm text-gray-500 mt-8 lg:mt-0"
    >
      <p>
        Total css properties from mdn-data: {{ Object.keys(properties).length }}
      </p>
      <p class="mb-4">
        *Filtered to animatable css properties + standard + non vendor prefixes:
        {{ Object.keys(cssPropertiesFiltered).length }}
      </p>
      <p>
        <i
          >Code @
          <a
            href="https://github.com/simboonlong/css-animatable"
            target="_blank"
            rel="noopener noreferrer"
            >Github</a
          >.</i
        >
      </p>
      <p>
        <i>
          Author ©
          <a
            href="http://simboonlong.com"
            target="_blank"
            rel="noopener noreferrer"
            >Sim Boon Long</a
          >.</i
        >
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import _ from "lodash";
import { css } from "mdn-data";
import Demo from "@/components/Demo.vue";
import { MdnData } from "./mdn-data";

export default defineComponent({
  name: "Home",
  components: {
    Demo,
  },
  data() {
    return {
      properties: css.properties as MdnData,
    };
  },
  computed: {
    cssPropertiesFiltered(): MdnData {
      // https://github.com/mdn/yari/blob/main/kumascript/macros/CSSAnimatedProperties.ejs
      // tallied with mdn list of animatable properties, but want to further filter
      const picked = _.pickBy(this.properties, (property, value) => {
        if (
          property.animationType !== "notAnimatable" &&
          property.animationType !== "discrete" &&
          property.status === "standard" && // only want standard
          value.charAt(0) !== "-" // avoid vendor prefixes
        ) {
          return property;
        }
      });
      return picked;
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  transition: color 0.2s ease-out;
  color: #42b983;
  text-decoration: underline;

  &:hover {
    color: #238d5d;
  }
}

.aspect-3-2 {
  &::before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: (2 / 3) * 100%;
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }
}
</style>
