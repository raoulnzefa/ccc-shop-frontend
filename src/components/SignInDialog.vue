<template>
  <v-dialog v-model="isOpenDialog" width="500" persistent>
    <v-form v-model="valid">
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
                  prepend-icon="mdi-account-circle"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  label="密碼"
                  :rules="passwordRules"
                  type="password"
                  required
                  prepend-icon="mdi-lock"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-grey" text @click="resetSignInDialog">
            關閉
          </v-btn>
          <v-btn color="blue" text @click="signInUser" :disabled="!valid">
            登入
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  name: 'SignInDialog',
  data: () => {
    return {
      isOpenDialog: false,
      valid: false,
      username: '',
      password: '',
      usernameRules: [
        v => !!v || '欄位不可留空',
        v => /^[a-z0-9]+$/.test(v) || '使用者名稱只能有英文字母或數字'
      ],
      passwordRules: [
        v => !!v || '欄位不可留空',
        v => (v && v.length >= 6) || '密碼至少需有 6 個字元'
      ]
    }
  },
  methods: {
    openDialog() {
      this.isOpenDialog = true
    },
    signInUser() {
      console.log('this.username = ' + this.username)
      console.log('this.password = ' + this.password)

      this.resetSignInDialog()
    },
    resetSignInDialog() {
      this.username = ''
      this.password = ''
      this.isOpenDialog = false 
    }
  }
}
</script>

<style>

</style>