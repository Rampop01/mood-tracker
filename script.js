const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'],
        datasets: [{
            label: 'Recent Week Overview',
            data: [6, 8, 10, 10, 4, 9, 9],
            backgroundColor: '#DCAE96',
            // fill: true,
            borderColor: ['black'],
            borderWidth: 1,
            pointBackgroundColor: 'white',
        }]
    },
    options: {
        aspectRatio: 2.5,
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    borderColor: 'black'
                }
            },
            y: {
                // beginAtZero: true,
                ticks: {
                    callback: function (value, index, values) {
                        const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '🙂'];
                        return emojis[index];
                    }
                },
                grid: {
                    borderColor: 'black'
                }
            }
        }
    }
});