<template>
  <div id="home">
    <!-- header -->
    <Welcome />

    <!-- dropdown menu -->
    <v-container id="category-menu" class="mt-12 mb-12">
      <v-menu>
        <template v-slot:activator="{ attrs, on }">
          <v-btn color="cyan" class="white--text ma-5" v-bind="attrs" v-on="on">
            Category: {{ categories[selectedIndex] }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(cagetory, index) in categories"
            :key="index"
            @click="chooseCategory(index)"
            link
          >
            <v-list-item-title v-text="cagetory"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>

    <!-- products -->
    <v-container>
      <v-row justify="start">
        <Product
          v-for="product in getShowingProducts()"
          :key="product.name"
          :product="product"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Welcome from "../components/Welcome";
import Product from "../components/Product";

export default {
  name: "Home",
  components: {
    Welcome,
    Product,
  },
  data: () => {
    return {
      selectedIndex: 0,
      categories: ["All", "Computer", "Notebook", "Tablet", "Phone"],
    };
  },
  mounted() {
    // this.$store.dispatch("productStore/loadAllProducts");
    this.$store.dispatch("productStore/loadAllProductsFake");
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
