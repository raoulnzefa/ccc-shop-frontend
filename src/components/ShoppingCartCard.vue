<template>
  <v-container>
    <v-list>
      <v-card class="py-4 px-8 my-4">
        <h3 class="text-center">{{ items.venderName }}</h3>
        <v-divider class="my-4"></v-divider>
        <ShoppingCartItemRow v-for="item in items.items" :key="item.id" :item="item"/>
        <v-divider class="my-4"></v-divider>
        <v-row class="d-flex flex-row justify-space-between align-center ma-4">
          <h3>總金額：$ {{ shopTotalPrice }}</h3>
          <v-btn
              color="cyan"
              class="white--text ma-5"
              @click="$refs.sendOrderDialog.openDialog()"
          >
            立即下單
          </v-btn>
        </v-row>
      </v-card>
    </v-list>

    <SendOrderDialog
        ref="sendOrderDialog"
        identity="2"
        @close="isOpenDialog = false"
    />
  </v-container>
</template>

<script>
import ShoppingCartItemRow from "./ShoppingCartItemRow";
import SendOrderDialog from "./SendOrderDialog";

export default {
  name: "ShoppingCartCard",
  components: {
    SendOrderDialog,
    ShoppingCartItemRow
  },
  props: ["items"],
  data: () => {
    return {
      isOpenDialog: false
    }
  },
  computed: {
    shopTotalPrice: function () {
      return this.$store.getters['shoppingCartStore/getShopTotalPrice'](this.items.venderName)
    }
  }
}
</script>

<style></style>