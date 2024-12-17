// Statistik Grafik menggunakan Chart.js
const ctx = document.getElementById('statisticsChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [2000, 3000, 2500, 3500, 4000, 4500],
        borderColor: '#4caf50',
        fill: false,
      },
      {
        label: 'Expenses',
        data: [1500, 2000, 1800, 2500, 3000, 3200],
        borderColor: '#f44336',
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
