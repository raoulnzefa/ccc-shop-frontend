<template>
  <div>
    <Welcome></Welcome>
    <!-- <Product></Product> -->
  </div>
</template>

<script>
import Welcome from "./Welcome.vue";
// import Product from "./Product.vue";

export default {
  name: "HelloWorld",
  data: () => {},
  components: { Welcome },
};
</script>

<style>
.welcome-page {
  background-color: aliceblue;
}
</style>