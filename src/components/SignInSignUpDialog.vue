<template>
  <div>
    <!-- SignInSignUpDialog -->
    <v-dialog v-model="openSignInSignUpDialog" width="500">
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
            <v-btn color="primary" text @click="openSignUpDialog = !openSignUpDialog">
              註冊帳號
            </v-btn>
            <v-btn color="primary" text @click="openSignInDialog = !openSignInDialog">
              登入帳號
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- SignUpDialog -->
    <v-dialog v-model="openSignUpDialog" width="500">
      <v-card>
        <v-card-title>
          <span class="text-h5">註冊</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field 
                  id="signup-username"
                  label="使用者名稱"
                  type="text"
                  :rules="usernameRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  id="signup-password"
                  label="密碼"
                  type="password"
                  :rules="passwordRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field 
                  id="signup-phone"
                  label="手機號碼" 
                  type="tel"
                  :rules="phoneRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field 
                  id="signup-email"
                  label="電子郵件" 
                  type="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field 
                  id="signup-credit-card"
                  label="信用卡" 
                  type="text"
                  :rules="creditCardRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field 
                  id="signup-address"
                  label="住址" 
                  type="text"
                  :rules="addressRules"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="openSignUpDialog = false">
            關閉
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="signUpUser(), (openSignUpDialog = false), (openSignInSignUpDialog = false)"
          >
            註冊
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- SignInDialog -->
    <v-dialog v-model="openSignInDialog" width="500">
      <v-card>
        <v-card-title>
          <span class="text-h5">登入</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field 
                  id="signin-username" 
                  label="使用者名稱" 
                  type="text"
                  :rules="usernameRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  id="signin-password"
                  label="密碼"
                  :rules="passwordRules"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="openSignInDialog = false">
            關閉
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="signInUser(), (openSignInDialog = false), (openSignInSignUpDialog = false)"
          >
            登入
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
      openSignInSignUpDialog: false,
      openSignInDialog: false,
      openSignUpDialog: false,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      usernameRules: [
        v => !!v || '欄位不可留空',
        v => /^[a-z0-9]+$/.test(v) || '使用者名稱只能有英文字母或數字'
      ],
      passwordRules: [
        v => !!v || '欄位不可留空',
        v => (v && v.length >= 6) || '密碼至少需有 6 個字元'
      ],
      phoneRules: [
        v => !!v || '欄位不可留空',
        v => /^\d+$/.test(v) || '電話只能包含數字'
      ],
      emailRules: [
        v => !!v || '欄位不可留空',
        v => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || '電子郵件格式不符'
      ],
      creditCardRules: [
        v => !!v || '欄位不可留空',
        v => /^\d+$/.test(v) || '信用卡只能包含數字'
      ],
      addressRules: [
        v => !!v || '欄位不可留空',
      ]
    };
  },
  methods: {
    openDialog() {
      this.openSignInSignUpDialog = true
    },
    signUpUser() {
      const usernameText = document.getElementById("signup-username").value
      const passwordText = document.getElementById("signup-password").value
      const phoneText = document.getElementById("signup-phone").value
      const emailText = document.getElementById("signup-email").value
      const creditCardText = document.getElementById("signup-credit-card").value
      const addressText = document.getElementById("signup-address").value

      console.log('username = ' + usernameText)
      console.log('password = ' + passwordText)
      console.log('phone = ' + phoneText)
      console.log('email = ' + emailText)
      console.log('credit card = ' + creditCardText)
      console.log('address = ' + addressText)
    },
    signInUser() {
      const usernameText = document.getElementById("signin-username").value
      const passwordText = document.getElementById("signin-password").value

      console.log('username = ' + usernameText)
      console.log('password = ' + passwordText)
    }
  }
}
</script>

<style>

</style>