<template>
  <div>
    <Welcome />
    <v-container class="mt-12 mb-6">
      <v-menu>
        <template v-slot:activator="{ attrs, on }">
          <v-btn color="cyan" class="white--text ma-5" v-bind="attrs" v-on="on">
            Category: {{ selectedCategory }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(cagetory, index) in categories"
            :key="index"
            link
          >
            <v-list-item-title
              v-text="cagetory"
              @click="chooseCategory(index)"
            ></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>

    <v-container>
      <v-row align="start">
        <Product
          v-for="product in $store.state.productStore.products"
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
      selectedCategory: "Computer",
      categories: ["Computer", "Phone", "Tablet"],
    };
  },
  mounted() {
    // this.$store.dispatch("productStore/loadAllProducts");
    this.$store.dispatch("productStore/loadAllProductsFake");
  },
  methods: {
    chooseCategory(index) {
      this.selectedCategory = this.categories[index];
      console.log("choose category " + index); // debug
    },
  },
};
</script>
