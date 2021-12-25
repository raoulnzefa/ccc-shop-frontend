<template>
  <div>
    <v-container class="d-flex flex-column justify-center align-center">
      <MyAccountPage />
    </v-container>
  </div>
</template>

<script>
import MyAccountPage from "../components/MyAccountPage";

export default {
  name: "MyAccount",
  components: {
    MyAccountPage,
  },
};
</script>

<style></style>
