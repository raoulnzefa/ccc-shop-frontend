<template>
  <v-row class="text-center welcome-page" align="center">
    <v-col cols="4">
      <h1 class="font-weight-medium mt-5 ml-10 text-left">
        <i>Welcome to CCC Shop</i>
      </h1>
      <h3 class="headline font-weight-regular ml-10 text-left">
        <i>— Laugh out Loud =)</i>
      </h3>
    </v-col>
    <v-col cols="8">
      <v-carousel
        cycle
        height="250"
        interval="6000"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        style="margin-right: 0px"
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Welcome",
  data: () => {
    return {
      items: [
        {
          src: "https://techsaydigi.com/wp-content/uploads/2021/10/c5482f525b8615658cc1a33d35ce0fed.jpg",
        },
        {
          src: "https://cdn2.ettoday.net/images/5953/5953731.jpg",
        },
        {
          src: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg",
        },
        {
          src: "https://s.yimg.com/os/creatr-uploaded-images/2020-09/412dfe00-f77c-11ea-afdf-134045af78fd",
        },
      ],
    };
  },
};
</script>

<style>
.welcome-page {
  background-color: aliceblue;
}
</style>
