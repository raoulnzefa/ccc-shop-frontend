<template>
  <v-container>
    <UserTable />
  </v-container>
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
