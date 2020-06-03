<template>
  <div class="home">
    <hello-world msg="Hello, World!" />
    <div>
      <p>
        {{ greeting }} ({{ val }}) World! {{ envvar }}::{{
          stuff("string", 10)
        }}::{{ crazy }}
      </p>
    </div>
    <img
      alt="Vue logo"
      class="mb-2"
      height="400"
      src="./assets/chuttersnap-UmftXwTd8Q4-unsplash.jpg"
    />
    <p>
      Photo by
      <a
        href="https://unsplash.com/@chuttersnap?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >chuttersnap</a
      >
      on
      <a
        href="/s/photos/wild-rooster?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >Unsplash</a
      >
    </p>
  </div>
</template>

<script lang="ts">
import x from "src/home/services/something";
import helloWorld from "src/home/components/hello-world.vue";

console.log(process.env.FF_CTHULHU);

export default {
  name: "Home",
  components: {
    helloWorld,
  },
  data(): Record<string, any> {
    return {
      crazy: process.env.FF_CTHULHU,
      envvar: process.env.DATA,
      greeting: "Hello",
    };
  },
  computed: {
    val: (): number => x(),
  },
  methods: {
    stuff(a: string, b: number): string {
      return "test" + a + b;
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
