<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestiae
        ab ipsa laboriosam consequatur rem inventore dolores suscipit animi
        quaerat tempora minus assumenda quos odio accusamus totam eius excepturi
        labore, aspernatur recusandae vel sapiente iure itaque. Et quod natus
        porro reprehenderit perferendis optio expedita, sit aut magnam
        perspiciatis nihil repellat voluptatem quia sequi, impedit, repellendus
        error! Rem soluta sint rerum unde repellendus omnis quis quasi deleniti
        itaque laudantium, vero necessitatibus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>CCC Shop</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>
</style>