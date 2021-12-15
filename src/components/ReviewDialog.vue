<template>
  <v-dialog transition="dialog-bottom-transition" width="400">
    <template v-slot:activator="{ on, attrs }">
      <v-btn outlined class="mx-3" color="indigo" v-bind="attrs" v-on="on"
        >看看大家怎麼說</v-btn
      >
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark>Reviews</v-toolbar>
        <v-card-text>
          <div class="text-h6 py-5">Hello world!</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {};
</script>

<style>
</style>