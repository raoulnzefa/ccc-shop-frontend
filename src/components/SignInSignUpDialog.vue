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
    <v-dialog v-model="openSignUpDialog" width="500" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5 font-weight-bold">註冊</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field 
                  id="signup-username"
                  v-model="username"
                  label="使用者名稱"
                  type="text"
                  :rules="usernameRules"
                  required dense
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  id="signup-password"
                  v-model="password"
                  label="密碼"
                  type="password"
                  :rules="passwordRules"
                  required dense
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field 
                  id="signup-phone"
                  v-model="phone"
                  label="手機號碼" 
                  type="tel"
                  :rules="phoneRules"
                  required dense
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field 
                  id="signup-email"
                  v-model="email"
                  label="電子郵件" 
                  type="email"
                  :rules="emailRules"
                  required dense
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field 
                  id="signup-credit-card"
                  v-model="creditCard"
                  label="信用卡" 
                  type="text"
                  :rules="creditCardRules"
                  required dense
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field 
                  id="signup-address"
                  v-model="address"
                  label="住址" 
                  type="text"
                  :rules="addressRules"
                  required dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            color="blue-grey darken-1" 
            text 
            @click="resetSignUpDialog"
          >
            關閉
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="signUpUser"
          >
            註冊
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- SignInDialog -->
    <v-dialog v-model="openSignInDialog" width="500" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5 font-weight-bold">登入</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field 
                  v-model="username"
                  label="使用者名稱" 
                  type="text"
                  :rules="usernameRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
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
          <v-btn 
            color="blue-grey darken-1" 
            text 
            @click="resetSignInDialog"
          >
            關閉
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="signInUser"
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
      username: '',
      password: '',
      phone: '',
      email: '',
      creditCard: '',
      address: '',
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
      ],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    }
  },
  methods: {
    openDialog() {
      this.openSignInSignUpDialog = true
    },
    signUpUser() {
      console.log('username = ' + this.username)
      console.log('password = ' + this.password)
      console.log('phone = ' + this.phone)
      console.log('email = ' + this.email)
      console.log('credit card = ' + this.creditCard)
      console.log('address = ' + this.address)

      this.resetSignUpDialog()
      this.openSignInSignUpDialog = false
    },
    signInUser() {
      console.log('this.username = ' + this.username)
      console.log('this.password = ' + this.password)

      this.resetSignInDialog()
      this.openSignInSignUpDialog = false
    },
    resetSignUpDialog() {
      this.username = ''
      this.password = ''
      this.phone = ''
      this.email = ''
      this.creditCard = ''
      this.address = ''
      this.openSignUpDialog = false
    },
    resetSignInDialog() {
      this.username = ''
      this.password = ''
      this.openSignInDialog = false 
    }
  }
}
</script>