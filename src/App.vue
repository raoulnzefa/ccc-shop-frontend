<template>
  <v-app>
    <v-app-bar
      color="cyan darken-2 accent-4"
    >
      <v-toolbar-title>
        CCC Shop
      </v-toolbar-title>

      <v-form class="search-bar">
        <v-container>
          <v-row>
            <v-text-field
              label="搜尋商品"
              outlined
              dense
            ></v-text-field>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
      
      <v-spacer></v-spacer>

      <v-dialog
      v-model="dialog"
      width="500"
      >
        <v-card>
          <v-card-title class="text-h5 cyan lighten-2">
            登入 / 註冊
          </v-card-title>

          <v-divider></v-divider>

          <v-card-actions>
            <v-row justify="center">
              <v-btn
              color="primary"
              text
              @click="dialog = false"
              >
                註冊
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                登入
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn plain>
        我想賣東西
      </v-btn>

      <v-btn @click="dialog = true" plain>
        登入/註冊
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => {
    return {
      dialog: false
    }
  },
};
</script>

<style>
.search-bar {
  margin-top: 24px;
  margin-left: 20px;
}
</style>
