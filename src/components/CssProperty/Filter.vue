<template>
  <div class="flex flex-wrap lg:-mx-2 text-xs">
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo blur" />
      <p>blur</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo brightness" />
      <p>brightness</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo contrast" />
      <p>contrast</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo drop-shadow" />
      <p>drop-shadow</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo grayscale" />
      <p>grayscale</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo hue-rotate" />
      <p>hue-rotate</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo invert" />
      <p>invert</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo opacity" />
      <p>opacity</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo saturate" />
      <p>saturate</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo sepia" />
      <p>sepia</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleImage from "@/components/Example/ExampleImage.vue";

export default defineComponent({
  name: "background-size",
  components: {
    ExampleImage,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: filter 0.7s ease-out;
}

.blur {
  filter: blur(0);

  &:hover {
    filter: blur(2px);
  }
}

.brightness {
  filter: brightness(1);

  &:hover {
    filter: brightness(1.5);
  }
}

.contrast {
  filter: contrast(100%);

  &:hover {
    filter: contrast(200%);
  }
}

.drop-shadow {
  filter: drop-shadow(0 0 0 transparent);

  &:hover {
    filter: drop-shadow(0 5px 20px gold);
  }
}

.grayscale {
  filter: grayscale(0);

  &:hover {
    filter: grayscale(100%);
  }
}

.hue-rotate {
  filter: hue-rotate(0deg);

  &:hover {
    filter: hue-rotate(90deg);
  }
}

.invert {
  filter: invert(0%);

  &:hover {
    filter: invert(100%);
  }
}

.opacity {
  filter: opacity(100%);

  &:hover {
    filter: opacity(25%);
  }
}

.saturate {
  filter: saturate(100%);

  &:hover {
    filter: saturate(200%);
  }
}

.sepia {
  filter: sepia(0%);

  &:hover {
    filter: sepia(100%);
  }
}
</style>
