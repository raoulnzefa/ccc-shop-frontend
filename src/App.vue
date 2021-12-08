<template>
  <v-app>
    <v-app-bar
      class="app-bar"
      style="height: 64px; position: fixed; z-index: 1000"
      color="cyan darken-2 accent-4"
    >
      <v-toolbar-title style="height: 64px"></v-toolbar-title>
      <v-icon x-large>mdi-store-outline</v-icon>
      <v-form class="search-bar">
        <v-container>
          <v-row>
            <v-text-field
              label="搜尋商品"
              outlined
              dense
              append-icon="mdi-magnify"
            ></v-text-field>
            <!-- <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn> -->
          </v-row>
        </v-container>
      </v-form>

      <v-spacer></v-spacer>

      <v-btn @click="$refs.signUpDialog.openDialog()" plain> 我想賣東西 </v-btn>

      <!-- <v-btn @click="signInSignUpDialog = true" plain> 登入/註冊 </v-btn> -->
      <v-btn
        @click="$refs.signInSignUpDialog.openDialog()"
        plain
        v-if="!$store.state.userStore.isLogin"
      >
        登入/註冊
      </v-btn>

      <v-btn plain v-if="$store.state.userStore.isLogin">{{
        $store.state.userStore.username
      }}</v-btn>

      <SignInSignUpDialog ref="signInSignUpDialog" />
      <SignUpDialog ref="signUpDialog" identity="1" />

      <v-btn icon>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
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
  methods: {},
};
</script>

<style>
.search-bar {
  margin-top: 30px;
  margin-left: 20px;
}
</style>
