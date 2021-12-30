<template>
  <div>
    title 5
    <apexchart width="500" type="line" :options="chartOptions" :series="series"></apexchart>
    788675
    <apexchart width="500" type="bar" :options="chartOptions_bar" :series="series_bar"></apexchart>
    <button @click="loginUser('Admin', 'Admin123')">login</button>
  </div>
</template>

<script>
import loginUser from "../api/userApi"

export default {
  data: function() {
    return {
      userName: "",
      chartOptions: {
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        tooltip: {
            fixed: {
                enabled: false,
                position: 'topRight'
            }
        }
      },
      series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
      }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
      }],

      chartOptions_bar: {
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series_bar: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],

    }
  },
  mounted() {
    this.putInside()
  },
  methods: {
    loginUser(username, password) {
      this.userName = await loginUser(username, password)
      this.chartOptions.xaxis.categories = []
    },
    putInside() {
      // akdjhlkgfjhf
    }
  }
}
</script>

<style>

</style>