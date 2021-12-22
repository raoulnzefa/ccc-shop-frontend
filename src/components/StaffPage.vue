<template>
  <v-card
    min-height="750px"
    min-width="300px"
    max-width="1600px"
    class="elevation-5 my-3"
  >
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title class="pl-3">
        <v-icon class="mr-3"> mdi-wrench </v-icon>
        {{ $store.state.userStore.username }}'s Management Page
      </v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left> mdi-account </v-icon>
        Account
      </v-tab>
      <v-tab>
        <v-icon left> mdi-laptop </v-icon>
        Products
      </v-tab>
      <v-tab>
        <v-icon left> mdi-calendar-text </v-icon>
        Orders
      </v-tab>
      <v-tab>
        <v-icon left> mdi-sale </v-icon>
        Discounts
      </v-tab>
      <v-tab>
        <v-icon left> mdi-finance </v-icon>
        Report
      </v-tab>

      <v-tab-item style="width: 1300px">
        <AccountManagementTab />
      </v-tab-item>

      <v-tab-item style="width: 1300px">
        <ProductTable />
      </v-tab-item>

      <v-tab-item style="width: 1300px;">
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
              Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
              dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis.
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec
              quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam
              at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item style="width: 1300px">
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
              Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
              dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis.
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec
              quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam
              at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item style="width: 1300px">
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
              Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
              dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis.
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec
              quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam
              at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import AccountManagementTab from "./AccountManagementTab";
import ProductTable from "./ProductTable";

export default {
  name: "StaffPage",
  components: {
    AccountManagementTab,
    ProductTable,
  },
};
</script>

<style>
</style>