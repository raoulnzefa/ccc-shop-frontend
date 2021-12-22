<template>
  <v-container>
    <v-list class="mt-6">
      <v-card class="py-4 px-8 my-4">
        <!-- vender name and checkbox -->
        <v-row justify="start" align="center" class="pl-4">
          <v-checkbox :input-value="false"></v-checkbox>
          <h4>{{ items.venderName }}</h4>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <!-- items -->
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
    console.log("shopping cart card")
    console.log(this.items)
  }
}
</script>

<style></style>