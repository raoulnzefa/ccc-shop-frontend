<template>
  <v-container>
    <h1 class="text-h4 text-center">"{{ $route.params.text }}" 的搜尋結果</h1>
    <v-list>
      <v-card height="120" class="ma-8">
        <v-list-item class="ma-4">
          <v-img
              max-height="200"
              max-width="150"
              src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5669285/0/637600552353230000?v=1"
          />
          <v-list-item-content class="ml-6">
            <v-list-item-title class="font-weight-bold my-2">iPhone 13 Pro Max</v-list-item-title>
            <v-list-item-subtitle>PHONE</v-list-item-subtitle>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-list-item-action>
            <h6 class="text-subtitle-1">$ 99999</h6>
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
  },
  updated() {
    this.searchText = this.$route.params.text
    this.products = this.$store.getters["productStore/searchProductsByText"](this.searchText)
  }
}
</script>

<style scoped>

</style>