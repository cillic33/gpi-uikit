<template>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: ['Департамент 1', 'Департамент 2', 'Департамент 3', 'Департамент 4', 'Департамент 5', 'Департамент 6'],
        datasets: [
          {
            label: 'Новые',
            backgroundColor: 'rgba(58,192,127,0.58)',
            data: [40, 20, 12, 44, 33, 11],
          },
          {
            label: 'На рассмотрении',
            backgroundColor: 'rgba(31,59,169,0.71)',
            data: [13, 37, 5, 16, 2, 19],
          },
          {
            label: 'Приостановлено',
            backgroundColor: 'rgba(171,48,136,0.69)',
            data: [3, 5, 8, 11, 15, 22],
          },
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Заявки'
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        },
      }
    }
  }
}
</script>
