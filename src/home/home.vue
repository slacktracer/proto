<template>
  <div class="home">
    <div>
      <p>
        {{ greeting }} ({{ val }}) World! {{ version }}::{{ envvar }}::{{
          stuff("", 10)
        }}
        --- {{ crazy }}
      </p>
    </div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Tentative seed project" />
  </div>
</template>

<script lang="ts">
import { version } from "../../package.json";
import x from "../something";
import HelloWorld from "./components/hello-world.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data(): Record<string, any> {
    console.log(process.env.FF_CTHULHU);
    return {
      crazy: process.env.FF_CTHULHU,
      envvar: process.env.DATA,
      greeting: "Hello",
      version,
    };
  },
  computed: {
    val: (): number => x(),
  },
  methods: {
    stuff: function stuff(): string {
      return "test";
    },
  },
};
</script>
