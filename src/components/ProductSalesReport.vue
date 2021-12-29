<template>
  <div>
    <v-row justify="space-around">
      <v-date-picker v-model="startTimepicker"></v-date-picker>
      <v-date-picker v-model="endTimepicker"></v-date-picker>
    </v-row>
    <apexchart
      width="500"
      type="bar"
      :options="chartOptions_bar"
      :series="series_bar"
    ></apexchart>
  </div>
</template>

<script>
import { getSalesReport } from "@/api/reportApi";

export default {
  data: function () {
    return {
      startTimepicker: "2018-12-20",
      endTimepicker: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      chartOptions_bar: {
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        xaxis: {
          categories: ["1", "2"],
        },
      },
      series_bar: [
        {
          name: "銷售數量",
          data: [],
        },
      ],
      reportData: {},
    };
  },
  async mounted() {
    this.reportData = await getSalesReport(
      sessionStorage.getItem("id"),
      this.startTimepicker,
      this.endTimepicker
    );
    this.chartOptions_bar.xaxis.categories = this.reportData.categoryList;
    this.series_bar[0].data = this.reportData.quantityList;

    // console.log("chartOptions_bar", this.chartOptions_bar.xaxis.categories);
    // console.log("quantityList", this.reportData.quantityList);
  },
  methods: {},
};
</script>

<style>
</style>