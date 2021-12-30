<template>
  <div>
    <v-row justify="space-around">
      <v-date-picker v-model="startTimepicker"></v-date-picker>
      <v-date-picker v-model="endTimepicker"></v-date-picker>
    </v-row>
    <apexchart
      width="500"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { getSalesReport } from "@/api/reportApi";
// import axios from "axios";

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
      reportData: {},
      startTimepicker: "2017-12-20",
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