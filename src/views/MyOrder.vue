<template>
  <div>
    <v-container class="d-flex flex-column justify-center align-center">
      <MyOrderPage />
    </v-container>
  </div>
</template>

<script>
import MyOrderPage from "../components/MyOrderPage";

export default {
  name: "MyOrder",
  components: {
    MyOrderPage,
  },
};
</script>

<style></style>
