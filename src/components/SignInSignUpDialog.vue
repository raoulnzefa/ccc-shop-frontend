<template>
  <div>
    <v-dialog v-model="isOpenDialog" width="500">
      <v-card>
        <v-card-title class="text-h5"> 登入 / 註冊 </v-card-title>

        <v-divider></v-divider>

        <v-card-text style="padding: 0px">
          <v-carousel
            :show-arrows="false"
            cycle
            height="250"
            interval="4500"
            hide-delimiter-background
            show-arrows-on-hover
            delimiter-icon="mdi-minus"
            style="padding: 0px"
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="text-h2">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>

        <v-card-actions>
          <v-row justify="center" style="margin: 0px">
            <v-btn
              color="primary"
              text
              @click="$refs.signUpDialog.openDialog()"
            >
              註冊帳號
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="$refs.signInDialog.openDialog()"
            >
              登入帳號
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <SignUpDialog ref="signUpDialog" identity="2" @close="isOpenDialog=false" />
    <SignInDialog ref="signInDialog" @close="isOpenDialog=false" />
  </div>
</template>

<script>
import SignUpDialog from "./SignUpDialog";
import SignInDialog from "./SignInDialog";

export default {
  name: "SignInSignUpDialog",
  components: {
    SignUpDialog,
    SignInDialog,
  },
  data: () => {
    return {
      isOpenDialog: false,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  methods: {
    openDialog() {
      this.isOpenDialog = true;
    },
  },
};
</script>