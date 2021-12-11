<template>
  <v-app>
    <v-app-bar
      class="app-bar rounded-lg rounded-t-0"
      style="height: 64px; position: fixed; z-index: 1000"
      color="cyan lighten-4"
    >
      <v-toolbar-title style="height: 64px"></v-toolbar-title>

      <router-link to="/">
        <v-icon x-large>mdi-store-outline</v-icon>
      </router-link>

      <v-form class="search-bar">
        <v-container>
          <v-row>
            <v-text-field
              label="搜尋商品"
              outlined
              dense
              append-icon="mdi-magnify"
            ></v-text-field>
          </v-row>
        </v-container>
      </v-form>

      <v-spacer></v-spacer>

      <router-link
        to="/admin"
        v-if="$store.state.userStore.identity === 'admin'"
      >
        <v-btn plain color="deep-purple accent-1"> admin </v-btn>
      </router-link>

      <router-link
        to="/staff"
        v-if="
          $store.state.userStore.identity === 'staff' ||
          $store.state.userStore.identity === 'admin'
        "
      >
        <v-btn plain color="teal darken-2"> staff </v-btn>
      </router-link>

      <v-btn @click="$refs.signUpDialog.openDialog()" plain> 我想賣東西 </v-btn>

      <v-btn
        @click="$refs.signInSignUpDialog.openDialog()"
        plain
        v-if="!$store.state.userStore.isLogin"
      >
        登入/註冊
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ attrs, on }">
          <v-btn plain v-bind="attrs" v-on="on" v-if="$store.state.userStore.isLogin">{{
            $store.state.userStore.username
          }}</v-btn>
        </template>

        <v-list>
          <v-list-item link @click="logoutUser()">
            <v-list-item-title v-text="'登出'"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <SignInSignUpDialog ref="signInSignUpDialog" />
      <SignUpDialog ref="signUpDialog" identity="1" />

      <router-link to="/cart">
        <v-btn icon>
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <div style="margin-top: 80px"></div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SignInSignUpDialog from "./components/SignInSignUpDialog";
import SignUpDialog from "./components/SignUpDialog";

export default {
  name: "App",
  components: {
    SignInSignUpDialog,
    SignUpDialog,
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("userStore/logoutUser");
      location.reload();
    }
  },
};
</script>

<style>
.search-bar {
  margin-top: 30px;
  margin-left: 20px;
}
</style>
