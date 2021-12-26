<template>
  <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="orders" :search="search">
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn plain outlined @click="deleteItem(item)"> 退貨 </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { getCustomerOrders } from "@/api/orderApi";

export default {
  data: () => ({
    search: "",
    headers: [
      { text: "訂單編號", value: "id" },
      { text: "收件人", value: "recipientName" },
      { text: "購買商品", value: "orderItems" },
      { text: "總金額", value: "totalPrice" },
      { text: "收件地址", value: "shippingAddress" },
      { text: "運費", value: "shippingFee" },
      { text: "運送狀態", value: "status" },
      { text: "付款方式", value: "paymentMethod" },
      { text: "下訂日期", value: "orderTime" },
      { text: "運送日期", value: "shippingTime" },
      { text: "抵達日期", value: "deliveryTime" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    orders: [],
  }),
  async mounted() {
    this.orders = await getCustomerOrders(sessionStorage.getItem("id"));
    console.log(this.orders);
  },
  methods: {
    // deleteItem(item) {
    //   this.editedIndex = this.orders.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.dialogDelete = true;
    // },
  },
};
</script>

<style>
</style>