<template>
  <v-container>
    <h1 class="text-h4 text-center">"{{ searchText }}" 的搜尋結果</h1>
    <v-list>
      <v-card  v-for="product in products" :key="product.id" class="ma-8 py-4">
        <v-list-item class="ma-4">
          <v-img
              max-height="150"
              max-width="150"
              :src="product.pictureURL"
          />
          <v-list-item-content class="ml-6">
            <v-list-item-title class="font-weight-bold my-2">{{ product.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ product.category }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-list-item-action-text>
            剩餘數量: {{ product.stock }}
          </v-list-item-action-text>
          <v-list-item-action>
            <h6 class="text-subtitle-1">$ {{ product.price }}</h6>
          </v-list-item-action>
        </v-list-item>
      </v-card>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "SearchPage",
  data: () => {
    return {
      searchText: "",
      products: []
    }
  },
  mounted() {
    this.searchText = this.$route.params.text
    this.products = this.$store.getters["productStore/searchProductsByText"](this.searchText)
    console.log(this.products)
  },
  // updated() {
  //   this.searchText = this.$route.params.text
  //   this.products = this.$store.getters["productStore/searchProductsByText"](this.searchText)
  //   console.log(this.products)
  // }
}
</script>

<style>

</style>