<template>
    <Doughnut
      id="my-doughnut-id" 
      class="my-doughnut"
      :options="chartOptions"
      :data="chartData"
    />
</template>

<script lang="ts">
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'my-doughnut-id',
  components: { Doughnut },
  data() {
    return {
      chartData: {
        labels: ["Data & BI", "Presales", "Code", "Music", "Travel", "Reading"],
        datasets: [
          {
            data: [30, 25, 20, 10, 8, 7],
            backgroundColor: [
              "#d2d9e9",
              "#b8c9e0",
              "#a3cef1",
              "#6096ba",
              "#457b9d",
              "#1d3557"
            ]
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>