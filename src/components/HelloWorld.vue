<template>
  <div>
    <Welcome></Welcome>
    <Product></Product>
  </div>
</template>

<script>
import Welcome from "./Welcome";
import Product from "./Product";

export default {
  name: "HelloWorld",
  data: () => {},
  components: { Welcome, Product },
};
</script>

<style></style>
