// Revenue Line Chart
new Chart(document.getElementById('revenueChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Revenue',
            data: [10000, 12000, 15000, 13000, 18000, 20000],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37,99,235,0.2)',
            fill: true,
            tension: 0.4
        }]
    }
});

// Traffic Doughnut Chart
new Chart(document.getElementById('trafficChart'), {
    type: 'doughnut',
    data: {
        labels: ['Organic', 'Social', 'Paid Ads', 'Referral'],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: ['#2563eb', '#10b981', '#f59e0b', '#ef4444']
        }]
    }
});

// Device Pie Chart
new Chart(document.getElementById('deviceChart'), {
    type: 'pie',
    data: {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [{
            data: [55, 35, 10],
            backgroundColor: ['#6366f1', '#14b8a6', '#f97316']
        }]
    }
});
