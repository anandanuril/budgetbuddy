// Monthly Performance Chart
const monthlyCtx = document.getElementById('monthlyPerformanceChart').getContext('2d');
new Chart(monthlyCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [3000, 4000, 3500, 4500, 5000, 5200],
        backgroundColor: '#4caf50',
      },
      {
        label: 'Expenses',
        data: [2000, 2500, 2200, 3000, 3400, 3600],
        backgroundColor: '#f44336',
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

// Expense Breakdown Chart
const breakdownCtx = document.getElementById('expenseBreakdownChart').getContext('2d');
new Chart(breakdownCtx, {
  type: 'doughnut',
  data: {
    labels: ['Rent', 'Food', 'Transportation', 'Entertainment', 'Utilities'],
    datasets: [
      {
        data: [1200, 800, 300, 400, 500],
        backgroundColor: ['#ff9800', '#4caf50', '#03a9f4', '#e91e63', '#9c27b0'],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  },
});

// Trends Chart
const trendsCtx = document.getElementById('trendsChart').getContext('2d');
new Chart(trendsCtx, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Savings',
        data: [500, 800, 1200, 1500],
        borderColor: '#4caf50',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Expenses',
        data: [1000, 1100, 950, 900],
        borderColor: '#f44336',
        tension: 0.4,
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
