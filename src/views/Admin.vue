<template>
  <div>
    <!-- Admin -->
    <v-container
      v-if="$store.state.userStore.identity === 'ADMIN'"
      style="max-width: 1500px"
    >
      <UserTable />
    </v-container>

    <!-- Not admin -->
    <v-container class="d-flex flex-column justify-center align-center" v-else>
      <h2>Not Accessible</h2>
    </v-container>
  </div>
</template>

<script>
import UserTable from "../components/UserTable";

export default {
  name: "Admin",
  components: {
    UserTable,
  },
};
</script>

<style></style>
