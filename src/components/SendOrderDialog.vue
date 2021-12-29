<template>
  <v-dialog
      v-model="isOpenDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar
          dark
          color="primary"
      >
        <v-btn
            icon
            dark
            @click="closeDialog()"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>訂單確認</v-toolbar-title>
      </v-toolbar>

      <!-- shopping cart items list -->
      <v-list three-line subheader class="px-8 py-4">
        <v-subheader class="subtitle-1">訂單內容</v-subheader>

        <v-list-item class="my-4">
          <v-img
              max-height="150"
              max-width="150"
              src="https://picsum.photos/id/11/500/300"
          ></v-img>
          <v-list-item-content class="ml-6">
            <v-list-item-title>Macbook pro</v-list-item-title>
            <v-list-item-subtitle>$54700 x 3 = $164100</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="my-4">
          <v-img
              max-height="150"
              max-width="150"
              src="https://picsum.photos/id/11/500/300"
          ></v-img>
          <v-list-item-content class="ml-6">
            <v-list-item-title>Macbook pro</v-list-item-title>
            <v-list-item-subtitle>$54700 x 3 = $164100</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <!-- payment settings -->
      <v-list three-line subheader class="px-8 py-4">
        <v-subheader>付款詳情</v-subheader>

        <v-list-item>
          <v-icon large>mdi-ticket-percent</v-icon>
          <v-list-item-content class="ml-6">
            <v-list-item-title>使用折扣</v-list-item-title>
            <v-list-item-subtitle>未使用折扣</v-list-item-subtitle>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-icon large>mdi-credit-card</v-icon>
          <v-list-item-content class="ml-6">
            <v-list-item-title>付款方式</v-list-item-title>
            <v-list-item-subtitle>信用卡 (9999888-7777666)</v-list-item-subtitle>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-icon large>mdi-truck-delivery</v-icon>
          <v-list-item-content class="ml-6">
            <v-list-item-title>寄送地址</v-list-item-title>
            <v-list-item-subtitle>台北市大安區忠孝東路xxx號5F</v-list-item-subtitle>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list subheader class="px-8 py-4">
        <v-list-item>
          <v-icon large>mdi-currency-usd</v-icon>
          <v-list-item-content class="ml-6">
            <v-list-item-title class="d-flex flex-row justify-space-between align-center">
              <div class="text-subtitle-1">總金額: $ 0</div>
              <v-btn
                  color="cyan"
                  class="white--text ma-5"
                  @click="sendOrder()"
              >
                結帳
              </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-card>
  </v-dialog>
</template>

<script>
import { createOrder } from "../api/orderApi"

export default {
  name: "SendOrderDialog",
  data: () => {
    return {
      isOpenDialog: false
    }
  },
  methods: {
    openDialog() {
      this.isOpenDialog = true
    },
    closeDialog() {
      this.isOpenDialog = false
    },
    sendOrder() {
      const orderData = {
        "customerId": 1,
        "shippingFee": 100,
        "recipientName": "Admin",
        "shippingAddress": "home",
        "paymentMethod": 0,
        "creditCardId": "1111-2222-3333-4444",
        "shippingDiscountCode": null,
        "seasoningDiscountCode": null,
        "totalPrice": 10000,
        "orderItems": {
          "1": 1,
          "2": 2,
          "3": 3
        }
      }
      createOrder(orderData)
      this.isOpenDialog = false;
    }
  }
}
</script>
