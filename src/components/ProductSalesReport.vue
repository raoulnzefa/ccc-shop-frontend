<template>
  <div class="mt-5">
    <div class="text-h4 font-weight-bold" style="text-align: center">
      產品銷售量統計圖
    </div>
    <v-row class="mt-3 justify-center align-center">
      <v-col cols="1">
        <div class="text-h5 font-weight-bold">From:</div>
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model="startTimepicker"
          type="text"
          prepend-inner-icon="mdi-calendar"
          readonly
          @click="startTimeDialog = true"
        ></v-text-field>
      </v-col>
      <v-col cols="1">
        <div class="text-h5 font-weight-bold">To:</div>
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model="endTimepicker"
          type="text"
          prepend-inner-icon="mdi-calendar"
          readonly
          @click="endTimeDialog = true"
        ></v-text-field>
      </v-col>
    </v-row>
    <template>
      <v-dialog v-model="startTimeDialog" max-width="300px">
        <v-date-picker
          v-model="startTimepicker"
          color="green lighten-1"
        ></v-date-picker>
        <v-btn @click="startTimeDialog = false">OK</v-btn>
      </v-dialog>
      <v-dialog v-model="endTimeDialog" max-width="300px">
        <v-date-picker v-model="endTimepicker"></v-date-picker>
        <v-btn @click="endTimeDialog = false">OK</v-btn>
      </v-dialog>
    </template>
    <apexchart
      class="ma-10"
      width="500"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { getSalesReport } from "@/api/reportApi";

export default {
  data: function () {
    return {
      options: {
        chart: {
          id: "productSalesReport",
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        xaxis: {
          categories: ["A", "B", "C"],
        },
      },
      series: [
        {
          name: "銷售數量",
          data: [13, 4, 6],
        },
      ],
      startTimeDialog: false,
      endTimeDialog: false,
      reportData: {},
      startTimepicker: "2018-01-01",
      endTimepicker: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
    };
  },
  async mounted() {
    this.reportData = await getSalesReport(
      sessionStorage.getItem("id"),
      this.startTimepicker,
      this.endTimepicker
    );

    this.options = this.prepareOptions(this.reportData.categoryList);
    this.series = this.prepareSeries(this.reportData.quantityList);
  },
  methods: {
    prepareOptions(responseCategories) {
      const options = {
        chart: {
          id: "productSalesReport",
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        xaxis: {
          categories: responseCategories,
        },
      };
      return options;
    },
    prepareSeries(responseQuantity) {
      const series = [
        {
          name: "銷售數量",
          data: responseQuantity,
        },
      ];
      return series;
    },
  },
};
</script>

<style>
</style>