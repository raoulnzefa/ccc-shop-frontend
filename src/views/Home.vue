<template>
  <div id="home">
    <!-- header -->
    <Welcome />

    <!-- dropdown menu -->
    <v-container class="mt-12 mb-4">
      <v-menu>
        <template v-slot:activator="{ attrs, on }">
          <v-btn color="cyan" class="white--text ma-5" v-bind="attrs" v-on="on">
            Category: {{ categories[selectedIndex] }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(category, index) in categories"
            :key="index"
            @click="chooseCategory(index)"
            link
          >
            <v-list-item-title v-text="category"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>

    <!-- products -->
    <v-container class="mb-4">
      <v-row justify="start">
        <div
          v-for="product in getShowingProducts()"
          :key="product.name"
          class="pa-4"
        >
          <Product :product="product" />
        </div>
      </v-row>
    </v-container>

    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import Welcome from "../components/Welcome";
import Product from "../components/Product";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Welcome,
    Product,
    Footer,
  },
  data: () => {
    return {
      selectedIndex: 0,
      categories: ["ALL", "COMPUTER", "NOTEBOOK", "TABLET", "PHONE"],
    };
  },
  mounted() {
    this.$store.dispatch("productStore/loadAllProducts");
    // this.$store.dispatch("productStore/loadAllProductsFake");
  },
  methods: {
    getShowingProducts() {
      if (this.selectedIndex === 0) {
        return this.$store.state.productStore.products;
      }

      return this.$store.state.productStore.products.filter(
        (product) => product.category === this.categories[this.selectedIndex]
      );
    },
    chooseCategory(index) {
      this.selectedIndex = index;
    },
  },
};
</script>

<style></style>
