<template>
  <v-dialog v-model="isOpenDialog" width="500">
    <v-card>
      <v-img height="400" :src="product.pictureURL"></v-img>
      <v-card-title>
        <span class="text-h5 font-weight-bold">{{ product.name }}</span>
        <v-spacer></v-spacer>
        <span class="subtitle-2">{{ product.venderName }}</span>
      </v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="product.rate"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
          <!-- <div class="grey--text ms-4">{{ product.rate }}</div> -->
        </v-row>

        <div class="mt-4 text-subtitle-1">$ {{ product.price }}</div>
        <div>
          {{ product.description }}
        </div>
      </v-card-text>

      <v-container>
        <v-row justify="center" align="center">
          <v-btn fab x-small @click="decreaseQuantity()">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <div class="mx-4">{{ quantity }}</div>
          <v-btn fab x-small @click="increaseQuantity()">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <div class="mx-6 my-4 text-subtitle-2">
            只剩 {{ product.stock }} 個 !
          </div>
          <!-- <v-btn
            outlined
            class="mx-3"
            color="indigo"
          >
            看看大家怎麼說
          </v-btn> -->
          <ReviewDialog />
        </v-row>
      </v-container>

      <v-card-actions>
        <v-btn
          block
          class="mb-3"
          color="secondary"
          elevation="5"
          @click="addProductToCart"
        >
          加入購物車
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ReviewDialog from "./ReviewDialog";

export default {
  name: "ProductInfoDialog",
    components: {
    ReviewDialog,
  },
  props: ["product"],
  data: () => {
    return {
      isOpenDialog: false,
      quantity: 1,
    };
  },
  methods: {
    openDialog() {
      this.isOpenDialog = true;
    },
    decreaseQuantity() {
      if (this.quantity <= 1) return;
      this.quantity--;
    },
    increaseQuantity() {
      if (this.quantity >= this.product.stock) return;
      this.quantity++;
    },
    addProductToCart() {
      console.log("add product " + this.product.name + " to cart");
      console.log("quantity: " + this.quantity);

      this.isOpenDialog = false;
    },
  },
};
</script>

<style></style>
