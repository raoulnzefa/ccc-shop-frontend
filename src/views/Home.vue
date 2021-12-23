<template>
  <div id="home">
    <!-- header -->
    <Welcome />

    <v-container class="broadcaster discount mt-5" style="max-width: 1600px">
      <div>
        <div
          v-for="shippingDiscounts in $store.state.discountStore
            .shippingDiscounts"
          :key="shippingDiscounts.discountCode"
        >
          <v-icon class="mx-2"> mdi-bullhorn </v-icon>
          {{ shippingDiscounts.policyDescription }}
        </div>
      </div>

      <div>
        <div
          class="mt-5"
          v-for="seasoningsDiscounts in $store.state.discountStore
            .seasoningsDiscounts"
          :key="seasoningsDiscounts.discountCode"
        >
          <v-icon class="mx-2"> mdi-bullhorn </v-icon>
          {{ seasoningsDiscounts.policyDescription }}
        </div>
      </div>

      <div>
        <div
          class="mt-5"
          v-for="specialDiscounts in $store.state.discountStore
            .specialDiscounts"
          :key="specialDiscounts.discountCode"
        >
          <v-icon class="mx-2"> mdi-bullhorn </v-icon>
          {{ specialDiscounts.policyDescription }}
        </div>
      </div>
    </v-container>

    <!-- dropdown menu -->
    <v-container class="mt-5">
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
      <v-row justify="center">
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
    this.$store.dispatch("discountStore/loadCurrentShippingDiscount");
    this.$store.dispatch("discountStore/loadCurrentSpecialDiscount");
    this.$store.dispatch("discountStore/loadCurrentSeasoningDiscount");
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

<style>
#home {
  background-image: url(https://mdn.mozillademos.org/files/11307/bubbles.png),
    linear-gradient(to right, rgb(73, 127, 173), rgba(255, 255, 255, 0));

  background-repeat: no-repeat, no-repeat, no-repeat;

  background-position: bottom right, left, right;
}

.broadcaster {
  background-color: rgb(46, 187, 145);
}

.discount {
  border-radius: 10px;
}
</style>
