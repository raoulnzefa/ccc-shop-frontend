<template>
  <v-card flat class="mx-10">
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="$store.state.userStore.username"
              label="使用者名稱"
              type="text"
              :rules="usernameRules"
              required
              dense
              prepend-icon="mdi-account-circle"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="$store.state.userStore.password"
              label="密碼"
              type="password"
              :rules="passwordRules"
              required
              dense
              prepend-icon="mdi-lock"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="$store.state.userStore.phone"
              label="手機號碼"
              type="tel"
              :rules="phoneRules"
              required
              dense
              prepend-icon="mdi-cellphone"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="$store.state.userStore.email"
              label="電子郵件"
              type="email"
              :rules="emailRules"
              required
              dense
              prepend-icon="mdi-email"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="$store.state.userStore.creditCard"
              label="信用卡"
              type="text"
              :rules="creditCardRules"
              dense
              prepend-icon="mdi-credit-card"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="$store.state.userStore.address"
              label="住址"
              type="text"
              :rules="addressRules"
              dense
              prepend-icon="mdi-map-marker"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-3">
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="save"> SAVE </v-btn>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { updateUser } from "@/api/userApi";

export default {
  name: "AccountManagementPage",
  data: () => {
    return {
      usernameRules: [
        (v) => !!v || "欄位不可留空",
        (v) => /^[A-Za-z0-9]+$/.test(v) || "使用者名稱只能有英文字母或數字",
      ],
      passwordRules: [
        (v) => !!v || "欄位不可留空",
        (v) => (v && v.length >= 6) || "密碼至少需有 6 個字元",
      ],
      phoneRules: [
        (v) => !!v || "欄位不可留空",
        (v) => /^\d+$/.test(v) || "電話只能包含數字",
      ],
      emailRules: [
        (v) => !!v || "欄位不可留空",
        (v) =>
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            v
          ) || "電子郵件格式不符",
      ],
      creditCardRules: [],
      addressRules: [],
    };
  },
  methods: {
    save() {
      updateUser(
        this.$store.state.userStore.id,
        this.$store.state.userStore.username,
        "2",
        this.$store.state.userStore.password,
        this.$store.state.userStore.phone,
        this.$store.state.userStore.email,
        this.$store.state.userStore.creditCard,
        this.$store.state.userStore.address
      );
    },
  },
};
</script>

<style>
</style>