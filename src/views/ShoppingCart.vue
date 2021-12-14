<template>
  <div>
    <v-container class="d-flex flex-column justify-center align-center" v-if="$store.state.userStore.isLogin">
      <h2>{{ $store.state.userStore.username }} 的購物車</h2>
      <v-container>
        <v-list class="mt-6">
          <v-card class="pa-4 my-2">
            <v-row justify="start" align="center" class="pl-4">
              <v-checkbox :input-value="false"></v-checkbox>
              <h4>Shop</h4>
            </v-row>
            <v-divider class="my-4"></v-divider>
            <v-row justify="start" align="center" class="pl-4">
              <v-img
                src="https://web-eshop.cdn.hinet.net/eShop%20Images/Product/phones/000100004254/154632-C50321583002.jpg"
                max-height="300"
                max-width="200"
              ></v-img>
              <v-col>
                <h2 class="mb-4">Product</h2>
                <v-row justify="start" align="center">
                  <v-btn fab small @click="decreaseQuantity()">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <div class="mx-4">{{ quantity }}</div>
                  <v-btn fab small @click="increaseQuantity()">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                  <div class="mx-6 my-4 text-subtitle-2">
                    剩餘數量: 不知道
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-list>
      </v-container>
    </v-container>

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

export default {
  name: "ShoppingCart",
  components: {
    SignInDialog
  },
  data: () => {
    return {
      quantity: 1
    };
  },
  methods: {
    decreaseQuantity() {
      if (this.quantity <= 1) return;
      this.quantity--;
    },
    increaseQuantity() {
      this.quantity++;
    },
  }
};
</script>

<style></style>
