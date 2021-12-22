<template>
  <v-row justify="space-between" align="center" class="pl-4">
    <v-col cols="1">
      <v-checkbox v-model="checkbox" @change="updateSelectedState()"></v-checkbox>
    </v-col>
    <v-col cols="3">
      <v-img
          :src="item.pictureURL"
          max-height="200"
          max-width="300"
      ></v-img>
    </v-col>
    <v-col cols="4">
      <v-row align="center">
        <h2>{{ item.name }}</h2>
        <v-spacer></v-spacer>
        <span class="subtitle-2">{{ item.category }}</span>
      </v-row>
      <v-row align="center" class="mt-6">
        <v-btn fab x-small @click="decreaseQuantity()">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <div class="mx-4">{{ item.quantity }}</div>
        <v-btn fab x-small @click="increaseQuantity()">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <span class="text-subtitle-2">
          剩餘數量: {{ item.stock }}
        </span>
      </v-row>
    </v-col>
    <v-col cols="2" class="text-center">
      <h3>$ {{ totalPrice }}</h3>
    </v-col>
    <v-col cols="1">
      <v-icon @click="deleteCartItem()"> mdi-delete </v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ShoppingCartItemRow",
  props: ["item"],
  data: () => {
    return {
      checkbox: false
    }
  },
  computed: {
    totalPrice: function () {
      return this.item.price * this.item.quantity;
    }
  },
  methods: {
    decreaseQuantity() {
      if (this.item.quantity <= 1) return;
      this.item.quantity--;

      this.$store.dispatch("shoppingCartStore/updateCartProductQuantity", {
        productId: this.item.id,
        quantity: this.item.quantity,
        venderName: this.item.venderName
      });
    },
    increaseQuantity() {
      if (this.item.quantity >= this.item.stock) return;
      this.item.quantity++;

      this.$store.dispatch("shoppingCartStore/updateCartProductQuantity", {
        productId: this.item.id,
        quantity: this.item.quantity,
        venderName: this.item.venderName
      });
    },
    updateSelectedState() {
      this.$store.dispatch("shoppingCartStore/updateCartProductSelected", {
        productId: this.item.id,
        venderName: this.item.venderName,
        selected: this.checkbox
      })
    },
    deleteCartItem() {
      console.log("刪除");
    },
    parsePriceText(price) {
      let result = ""
      while (parseInt(price) > 0) {
        let temp = price % 1000
        price = parseInt(price / 1000)
        result = temp + "," + result
      }
      return result.slice(0, -1)
    }
  }
}
</script>

<style></style>