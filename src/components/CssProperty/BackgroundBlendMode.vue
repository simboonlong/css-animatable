<template>
  <div class="flex flex-wrap lg:-mx-2 text-xs">
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo multiply"> </ExampleImage>
      <p>multiply</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo screen"> </ExampleImage>
      <p>screen</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo overlay"> </ExampleImage>
      <p>overlay</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo darken"> </ExampleImage>
      <p>darken</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo lighten"> </ExampleImage>
      <p>lighten</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo color-dodge"> </ExampleImage>
      <p>color-dodge</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo color-burn"> </ExampleImage>
      <p>color-burn</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo hard-light"> </ExampleImage>
      <p>hard-light</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo soft-light"> </ExampleImage>
      <p>soft-light</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo difference"> </ExampleImage>
      <p>difference</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo exclusion"> </ExampleImage>
      <p>exclusion</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo hue"> </ExampleImage>
      <p>hue</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo saturation"> </ExampleImage>
      <p>saturation</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo color"> </ExampleImage>
      <p>color</p>
    </div>
    <div class="w-full lg:w-1/2 lg:px-2 mb-2">
      <ExampleImage class="bg-cover demo luminosity"> </ExampleImage>
      <p>luminosity</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExampleImage from "@/components/Example/ExampleImage.vue";

export default defineComponent({
  name: "background-blend-mode",
  components: {
    ExampleImage,
  },
});
</script>

<style scoped lang="scss">
.demo {
  transition: background-blend-mode 0.7s ease-out;
  background-image: url("./../../assets/hills.jpg"),
    url("./../../assets/urban.jpg");
  background-repeat: no-repeat;
}

.multiply {
  &:hover {
    background-blend-mode: multiply;
  }
}

.screen {
  &:hover {
    background-blend-mode: screen;
  }
}

.overlay {
  &:hover {
    background-blend-mode: overlay;
  }
}

.darken {
  &:hover {
    background-blend-mode: darken;
  }
}

.lighten {
  &:hover {
    background-blend-mode: lighten;
  }
}

.color-dodge {
  &:hover {
    background-blend-mode: color-dodge;
  }
}

.color-burn {
  &:hover {
    background-blend-mode: color-burn;
  }
}

.color-burn {
  &:hover {
    background-blend-mode: color-burn;
  }
}

.hard-light {
  &:hover {
    background-blend-mode: hard-light;
  }
}

.soft-light {
  &:hover {
    background-blend-mode: soft-light;
  }
}

.difference {
  &:hover {
    background-blend-mode: difference;
  }
}

.exclusion {
  &:hover {
    background-blend-mode: exclusion;
  }
}

.hue {
  &:hover {
    background-blend-mode: hue;
  }
}

.saturation {
  &:hover {
    background-blend-mode: saturation;
  }
}

.color {
  &:hover {
    background-blend-mode: color;
  }
}

.luminosity {
  &:hover {
    background-blend-mode: luminosity;
  }
}
</style>
