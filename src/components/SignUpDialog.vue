<template>
  <v-dialog v-model="isOpenDialog" width="500" persistent>
    <v-card>
      <v-card-title>
        <span class="text-h5 font-weight-bold">註冊</span>
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
                required dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                label="密碼"
                type="password"
                :rules="passwordRules"
                required dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field 
                v-model="phone"
                label="手機號碼" 
                type="tel"
                :rules="phoneRules"
                required dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field 
                v-model="email"
                label="電子郵件" 
                type="email"
                :rules="emailRules"
                required dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field 
                v-model="creditCard"
                label="信用卡" 
                type="text"
                :rules="creditCardRules"
                required dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field 
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
        <v-btn color="blue-grey" text @click="resetSignUpDialog">
          關閉
        </v-btn>
        <v-btn color="blue" text @click="signUpUser">
          註冊
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'SignUpDialog',
  data: () => {
    return {
      isOpenDialog: false,
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
    }
  },
  methods: {
    openDialog() {
      this.isOpenDialog = true
    },
    signUpUser() {
      console.log('username = ' + this.username)
      console.log('password = ' + this.password)
      console.log('phone = ' + this.phone)
      console.log('email = ' + this.email)
      console.log('credit card = ' + this.creditCard)
      console.log('address = ' + this.address)

      this.resetSignUpDialog()
    },
    resetSignUpDialog() {
      this.username = ''
      this.password = ''
      this.phone = ''
      this.email = ''
      this.creditCard = ''
      this.address = ''
      this.isOpenDialog = false
    }
  }
}
</script>

<style>

</style>