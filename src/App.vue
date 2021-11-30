<template>
  <v-app>
    <v-app-bar color="cyan darken-2 accent-4">
      <v-toolbar-title> CCC Shop </v-toolbar-title>

      <v-form class="search-bar">
        <v-container>
          <v-row>
            <v-text-field label="搜尋商品" outlined dense></v-text-field>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-form>

      <v-spacer></v-spacer>

      <v-btn plain> 我想賣東西 </v-btn>

      <!-- <v-btn @click="signInSignUpDialog = true" plain> 登入/註冊 </v-btn> -->
      <v-btn @click="$refs.dialog.openDialog()" plain> 登入/註冊 </v-btn>

      <SignInSignUpDialog ref="dialog" />

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
import SignInSignUpDialog from './components/SignInSignUpDialog';

export default {
  name: "App",
  components: {
    SignInSignUpDialog
  }
};
</script>

<style>
.search-bar {
  margin-top: 24px;
  margin-left: 20px;
}
</style>
