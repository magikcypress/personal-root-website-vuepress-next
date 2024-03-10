<template>
    <Line
      id="my-line-id" 
      :options="chartOptions"
      :data="chartData"
    />
</template>

<script lang="ts">
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
  name: 'my-line-id',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ["2000", "2005", "2010", "2015", "2020", "2025", "2030", "2035", "2040"],
        datasets: [
          {
            label: "Legacy",
            data: [10, 20, 30, 40, 50, 60, 70, 89, 100],
            borderColor: "#d2d9e9",
            fill: {
              target: "origin",
              above: "#e4eaf4",
              below: "#6096ba"
            },
            pointRadius: 5,
            backgroundColor: [
              "#6096ba",
              "#6096ba",
              "#6096ba",
              "#6096ba",
              "#6096ba",
              "#bc3908",
              "#bc3908",
              "#bc3908",
              "#bc3908"
            ]
          }
        ]
      },
      chartOptions: {
        scales: {
          y: {
            ticks: {
              beginAtZero: true,
              callback: "function(value){ return ' ' + value + ' ki';  }"
            }
          }
        },
        responsive: true
      }
    }
  }
}
</script>