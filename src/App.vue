<template>
  <v-app>
    <v-app-bar
      class="app-bar rounded-lg rounded-t-0"
      style="height: 64px; position: fixed; z-index: 100"
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
        v-if="$store.state.userStore.identity === 'ADMIN'"
        style="text-decoration: none"
      >
        <v-btn plain color="deep-purple accent-1"> admin </v-btn>
      </router-link>

      <router-link
        to="/staff"
        v-if="
          $store.state.userStore.identity === 'STAFF' ||
          $store.state.userStore.identity === 'ADMIN'
        "
        style="text-decoration: none"
      >
        <v-btn plain color="teal darken-2"> staff </v-btn>
      </router-link>

      <v-btn @click="$refs.signUpDialog.openDialog()" plain>
        我想成為商家
      </v-btn>

      <v-btn
        @click="$refs.signInSignUpDialog.openDialog()"
        plain
        v-if="!$store.state.userStore.isLogin"
      >
        登入/註冊
      </v-btn>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            plain
            v-bind="attrs"
            v-on="on"
            v-if="$store.state.userStore.isLogin"
            >{{ $store.state.userStore.username }}</v-btn
          >
        </template>

        <v-list class="mx-auto text-center">
          <router-link to="/order" style="text-decoration: none">
            <v-list-item link>
              <v-list-item-title v-text="'訂單查詢'"></v-list-item-title>
            </v-list-item>
          </router-link>

          <v-divider />
          <router-link to="/account" style="text-decoration: none">
            <v-list-item link>
              <v-list-item-title v-text="'帳號設定'"></v-list-item-title>
            </v-list-item>
          </router-link>

          <v-divider />
          <v-list-item link @click="logoutUser()">
            <v-list-item-title v-text="'登出'"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <SignInSignUpDialog ref="signInSignUpDialog" />
      <SignUpDialog ref="signUpDialog" identity="1" />

      <router-link to="/cart">
        <v-btn icon>
          <!-- <v-badge color="pink" dot> -->
          <v-icon>mdi-cart</v-icon>
          <!-- </v-badge> -->
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <div style="margin-top: 64px"></div>
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
  mounted() {
    if (this.$store.state.userStore.isLogin) {
      this.$store.dispatch("shoppingCartStore/loadUserCartProducts", this.$store.state.userStore.id)
    }
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("userStore/logoutUser");
      this.$router.push("/");
      setTimeout(() => location.reload(), 500);
    },
  },
};
</script>

<style>
.search-bar {
  margin-top: 30px;
  margin-left: 20px;
}
</style>
