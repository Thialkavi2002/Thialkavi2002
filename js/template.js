// Revenue Chart
const ctx = document.getElementById('revenueChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [45, 55, 60, 50, 70, 65, 80, 75, 85, 90, 95, 100],
        backgroundColor: "#b49862"
      },
      {
        label: "Expenses",
        data: [30, 35, 40, 38, 45, 42, 50, 48, 55, 52, 60, 62],
        backgroundColor: "#6b7280"
      }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { labels: { color: "#e5e7eb" } } },
    scales: {
      x: { ticks: { color: "#e5e7eb" } },
      y: { ticks: { color: "#e5e7eb" } }
    }
  }
});

// Category Chart
const ctx2 = document.getElementById('categoryChart').getContext('2d');
new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ["Venues", "Catering", "Photography", "Other"],
    datasets: [{
      data: [45, 30, 15, 10],
      backgroundColor: ["#b49862", "#4b5563", "#9ca3af", "#374151"]
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { labels: { color: "#e5e7eb" } } }
  }
});
