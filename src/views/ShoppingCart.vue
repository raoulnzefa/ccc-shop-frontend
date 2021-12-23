<template>
  <div>
    <!-- Logged in -->
    <v-container class="d-flex flex-column justify-center align-center pt-4" v-if="$store.state.userStore.isLogin">
      <h3 class="text-h3">{{ $store.state.userStore.username }} 的購物車</h3>
      <ShoppingCartCard v-for="(items, index) in $store.state.shoppingCartStore.cartProducts" :key="index" :items="items" />
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
import { mapGetters } from "vuex"
import SignInDialog from "../components/SignInDialog";
import ShoppingCartCard  from "../components/ShoppingCartCard";

export default {
  name: "ShoppingCart",
  components: {
    ShoppingCartCard,
    SignInDialog
  },
  computed: {
    ...mapGetters("shoppingCartStore", {
      totalPrice: "getShoppingCartTotalPrice"
    })
  },
  mounted() {
    this.$store.dispatch("shoppingCartStore/loadUserCartProducts", this.$store.state.userStore.id)
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("shoppingCartStore/updateCartStateToBackend", this.$store.state.userStore.id)
    next()
  }
};
</script>

<style></style>
