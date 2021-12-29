<template>
  <v-container class="d-flex justify-center align-center">
    <div style="width: 1000px">
      <div class="text-h5 mx-10 my-10">基本資料</div>

      <v-alert
        border="top"
        icon="mdi-shield-lock-outline"
        prominent
        text
        type="info"
        elevation="2"
        class="mx-10"
      >
        <div class="text-body-2">小提醒</div>
        <div class="text-body-2">
          你選擇的「使用者名稱」將會被引用於網站上公開評價及相關連結，如果你不希望你的真實姓名被列入本平台，建議你選擇一個親切的暱稱使用。請放心，你的所有訊息、檔案及相關購買資料，網站將保障你的個人隱私！
        </div>
      </v-alert>
      <AccountManagementTab />
    </div>
  </v-container>
</template>

<script>
import AccountManagementTab from "./AccountManagementTab";

export default {
  components: {
    AccountManagementTab,
  },
};
</script>

<style>
</style>