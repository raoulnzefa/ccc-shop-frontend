<template>
  <v-data-table
    :headers="headers"
    :items="users"
    sort-by="identity"
    class="elevation-5 my-5"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>人員管理列表</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <!-- new/edit item dialog -->
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="info" dark v-bind="attrs" v-on="on"> New User </v-btn>
          </template>
          <!-- new/edit item card -->
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="editedItem.username"
                      label="Username*"
                      type="text"
                      :rules="usernameRules"
                      required
                      dense
                      prepend-icon="mdi-account-circle"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="editedItem.identity"
                      label="Identity*"
                      :items="['ADMIN', 'STAFF', 'CUSTOMER']"
                      required
                      dense
                      prepend-icon="mdi-account-group"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6" v-if="editedIndex === -1">
                    <v-text-field
                      v-model="editedItem.password"
                      label="Password*"
                      :rules="passwordRules"
                      required
                      dense
                      prepend-icon="mdi-lock"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email*"
                      type="email"
                      :rules="emailRules"
                      required
                      dense
                      prepend-icon="mdi-email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="editedItem.phone"
                      label="Phone number*"
                      type="tel"
                      :rules="phoneRules"
                      required
                      dense
                      prepend-icon="mdi-cellphone"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="editedItem.creditCard"
                      label="Credit card"
                      type="text"
                      :rules="creditCardRules"
                      dense
                      prepend-icon="mdi-credit-card"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.address"
                      label="Address"
                      type="text"
                      :rules="addressRules"
                      dense
                      prepend-icon="mdi-map-marker"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close()">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save()"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- end of new/edit item dialog -->

        <!-- delete item dialog -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this user?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- end of delete item dialog -->
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>

    <!-- <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template> -->
  </v-data-table>
</template>

<script>
import { createUser } from "@/api/userApi";
import { updateUser } from "@/api/userApi";
import { deleteUser } from "@/api/userApi";
import { getAllUser } from "@/api/userApi";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Username", align: "start", value: "username" },
      { text: "Identity", value: "identity" },
      { text: "Password", value: "password" },
      { text: "Email", value: "email" },
      { text: "Phone", value: "phone" },
      { text: "Credit card", value: "creditCard" },
      { text: "Address", value: "address" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    usernameRules: [
      (v) => !!v || "欄位不可留空",
      // (v) => /^[a-z0-9]+$/.test(v) || "使用者名稱只能有英文字母或數字",
    ],
    passwordRules: [
      (v) => !!v || "欄位不可留空",
      // (v) => (v && v.length >= 6) || "密碼至少需有 6 個字元",
    ],
    phoneRules: [
      (v) => !!v || "欄位不可留空",
      // (v) => /^\d+$/.test(v) || "電話只能包含數字",
    ],
    emailRules: [
      (v) => !!v || "欄位不可留空",
      // (v) =>
      //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      //     v
      //   ) || "電子郵件格式不符",
    ],
    creditCardRules: [],
    addressRules: [],
    users: [],
    editedIndex: -1,
    editedItem: {
      id: -1,
      username: "",
      identity: "",
      password: "",
      email: "",
      phone: "",
      creditCard: "",
      address: "",
    },
    defaultItem: {
      id: -1,
      username: "",
      identity: "",
      password: "",
      email: "",
      phone: "",
      creditCard: "",
      address: "",
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New User" : "Edit User";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  async mounted() {
    this.users = await getAllUser();
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      deleteUser(this.users[this.editedIndex].id);
      this.users.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      const identities = ["ADMIN", "STAFF", "CUSTOMER"];
      let identity = identities.indexOf(this.editedItem.identity).toString();

      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem);
        updateUser(
          this.editedItem.id,
          this.editedItem.username,
          identity,
          this.editedItem.password,
          this.editedItem.phone,
          this.editedItem.email,
          this.editedItem.creditCard,
          this.editedItem.address
        );
      } else {
        this.users.push(this.editedItem);
        createUser(
          this.editedItem.username,
          identity,
          this.editedItem.password,
          this.editedItem.phone,
          this.editedItem.email,
          this.editedItem.creditCard,
          this.editedItem.address
        );
      }
      this.close();
    },
  },
};
</script>

<style>
</style>