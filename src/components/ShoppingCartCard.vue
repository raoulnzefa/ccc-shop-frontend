<template>
  <v-container>
    <v-list>
      <v-card class="py-4 px-8 my-4">
        <h3 class="text-center">{{ items.venderName }}</h3>
        <v-divider class="my-4"></v-divider>
        <ShoppingCartItemRow v-for="item in items.items" :key="item.id" :item="item" />
      </v-card>
    </v-list>
  </v-container>
</template>

<script>
import ShoppingCartItemRow from "./ShoppingCartItemRow";

export default {
  name: "ShoppingCartCard",
  components: {ShoppingCartItemRow},
  props: ["items"],
  mounted() {
    // console.log("shopping cart card")
    // console.log(this.items)
  }
}
</script>

<style></style>