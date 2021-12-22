<template>
  <div>
    <!-- Logged in -->
    <v-container class="d-flex flex-column justify-center align-center pt-4" v-if="$store.state.userStore.isLogin">
      <h1>{{ $store.state.userStore.username }} 的購物車</h1>
      <ShoppingCartCard v-for="items in shoppingCartItems" :key="items.venderName" :items="items" />
      <v-row class="d-flex flex-row justify-space-between align-center ma-4">
        <h3>總金額：$34000</h3>
        <v-btn color="cyan" class="white--text ma-5" @click="purchaseCartItems()">
          立即下單
        </v-btn>
      </v-row>
    </v-container>

    <!-- Not logged in -->
    <v-container class="d-flex flex-column justify-center align-center" v-else>
      <h2>請先登入以查看購物車</h2>
      <v-btn color="cyan" class="white--text ma-5" @click="$refs.signInDialog.openDialog()">
        登入
      </v-btn>
    </v-container>

    <SignInDialog ref="signInDialog" identity="1" />
  </div>
</template>

<script>
import SignInDialog from "../components/SignInDialog";
import ShoppingCartCard  from "../components/ShoppingCartCard";
import {getShoppingCartProducts} from "../api/shoppingCartApi";

export default {
  name: "ShoppingCart",
  components: {
    ShoppingCartCard,
    SignInDialog
  },
  data: () => {
    return {
      shoppingCartItems: []
    };
  },
  async mounted() {
    const data = await getShoppingCartProducts(this.$store.state.userStore.id)
    this.shoppingCartItems = data.shoppingCartItems
  },
  methods: {
    purchaseCartItems() {
      console.log("下單");
    }
  }
};
</script>

<style></style>
