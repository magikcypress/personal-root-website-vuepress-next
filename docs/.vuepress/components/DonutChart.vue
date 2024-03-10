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
        labels: ["Listen", "Speak", "Love"],
        datasets: [
          {
            data: [30, 20, 10],
            backgroundColor: [
              "#d2d9e9",
              "#a3cef1",
              "#6096ba"
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