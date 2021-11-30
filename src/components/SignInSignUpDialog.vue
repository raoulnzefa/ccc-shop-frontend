<template>
  <div>
    <!-- signInSignUpDialog -->
    <v-dialog v-model="signInSignUpDialog" width="500">
      <v-card>
        <v-card-title class="text-h5"> 登入 / 註冊 </v-card-title>

        <v-divider></v-divider>

        <v-card-text style="padding:0px">
          <v-carousel
            :show-arrows="false"
            cycle
            height="250"
            interval=4500
            hide-delimiter-background
            show-arrows-on-hover
            delimiter-icon="mdi-minus"
            style="padding:0px"
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
          <v-row justify="center" style="margin:0px">
            <v-btn color="primary" text @click="signUpDialog = !signUpDialog">
              註冊
            </v-btn>
            <v-btn color="primary" text @click="signInDialog = !signInDialog">
              登入
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- signUpDialog -->
    <v-dialog v-model="signUpDialog" width="500">
      <v-card>
        <v-card-title>
          <span class="text-h5">Sign Up</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump',
                  ]"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="signUpDialog = false">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="(signUpDialog = false), (signInSignUpDialog = false)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- signInDialog -->
    <v-dialog v-model="signInDialog" width="500">
      <v-card>
        <v-card-title>
          <span class="text-h5">Sign in</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="signInDialog = false">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="(signInDialog = false), (signInSignUpDialog = false)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "SignInSignUpDialog",
  data: () => {
    return {
      signInSignUpDialog: false,
      signInDialog: false,
      signUpDialog: false,
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
      this.signInSignUpDialog = true
    }
  }
}
</script>

<style>

</style>