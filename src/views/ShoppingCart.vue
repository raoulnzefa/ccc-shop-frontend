<template>
  <div>
    <!-- Logged in -->
    <v-container class="d-flex flex-column justify-center align-center pt-4" v-if="$store.state.userStore.isLogin">
      <h1>{{ $store.state.userStore.username }} 的購物車</h1>
      <v-container>
        <v-list class="mt-6">
          <v-card class="py-4 px-8 my-4">
            <v-row justify="start" align="center" class="pl-4">
              <v-checkbox :input-value="false"></v-checkbox>
              <h4>Shop</h4>
            </v-row>
            <v-divider class="my-4"></v-divider>
            <v-row justify="start" align="center" class="pl-4">
              <v-checkbox :input-value="false"></v-checkbox>
              <v-img
                src="https://web-eshop.cdn.hinet.net/eShop%20Images/Product/phones/000100004254/154632-C50321583002.jpg"
                max-height="300"
                max-width="200"
              ></v-img>
              <v-col>
                <h2 class="mb-2">Product</h2>
                <h3 class="mb-4">$34000</h3>
                <v-row justify="start" align="center">
                  <v-btn fab x-small @click="decreaseQuantity()">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <div class="mx-4">{{ quantity }}</div>
                  <v-btn fab x-small @click="increaseQuantity()">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                  <div class="mx-6 my-4 text-subtitle-2">
                    剩餘數量: 不知道
                  </div>
                </v-row>
              </v-col>
              <v-spacer></v-spacer>
              <v-icon @click="deleteCartItem()"> mdi-delete </v-icon>
            </v-row>
          </v-card>
        </v-list>

        <v-row class="d-flex flex-row justify-space-between align-center ma-4">
          <h3>總金額：$34000</h3>
          <v-btn color="cyan" class="white--text ma-5" @click="purchaseCartItems()">
            立即下單
          </v-btn>
        </v-row>
      </v-container>
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
    deleteCartItem() {
      console.log("刪除");
    },
    purchaseCartItems() {
      console.log("下單");
    }
  }
};
</script>

<style></style>
