<template>
  <v-row justify="start" align="center" class="pl-4">
    <v-checkbox :input-value="false"></v-checkbox>
    <v-img
        :src="item.pictureURL"
        max-height="300"
        max-width="200"
        class="mx-6 my-4"
    ></v-img>
    <v-col>
      <h2 class="mb-2">{{ item.name }}</h2>
      <h3 class="mb-4">${{ item.price }}</h3>
      <v-row justify="start" align="center">
        <v-btn fab x-small @click="decreaseQuantity()">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <div class="mx-4">{{ item.quantity }}</div>
        <v-btn fab x-small @click="increaseQuantity()">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <div class="mx-6 my-4 text-subtitle-2">
          剩餘數量: {{ item.stock }}
        </div>
      </v-row>
    </v-col>
    <v-spacer></v-spacer>
    <v-icon @click="deleteCartItem()"> mdi-delete </v-icon>
  </v-row>
</template>

<script>
export default {
  name: "ShoppingCartItemRow",
  props: ["item"],
  mounted() {
    // console.log(this.item)
  },
  methods: {
    decreaseQuantity() {
      if (this.item.quantity <= 1) return;
      this.item.quantity--;
    },
    increaseQuantity() {
      if (this.item.quantity >= this.item.stock) return;
      this.item.quantity++;
    },
    deleteCartItem() {
      console.log("刪除");
    }
  }
}
</script>

<style></style>