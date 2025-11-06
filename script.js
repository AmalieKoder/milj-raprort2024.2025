

if (window.matchMedia('(prefers-color-scheme: dark)')) {
    document.getElementById('dark-mode').checked = true
    document.documentElement.classList.add('dark')
}

document.getElementById('dark-mode').addEventListener('input', () => {
    if (Boolean(document.getElementById('dark-mode').checked)) {
        document.documentElement.classList.add('dark')
    } else{
        document.documentElement.classList.remove('dark')
    }
})



{
    const ctx = document.getElementById('myChart');

    // Data source: https://docs.google.com/document/d/1tapBVVkhyt2kMOoYdr9xol8BoY57FAUPE-wqkMPl3MI/edit?pli=1&tab=t.0
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Havnevegen', 'Mjåtveit'],
            datasets: [{
                label: 'Mengde (kg) 2024',
                data: [18215, 11820],
                borderWidth: 1,
                hoverBackgroundColor: '#2e7d32',
                hoverBorderColor: '#2e7d32',
            },{
                label: 'Mengde (kg) 2025 Jan–Juli',
                data: [9075, 7865],
                borderWidth: 1,
                hoverBackgroundColor: '#2e7d32',
                hoverBorderColor: '#2e7d32',
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

{
    const ctx = document.getElementById('sorting-grade');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Havnevegen', 'Mjåtveit'],
            datasets: [{
                label: 'Sorteringsgrad (%) 2024',
                data: [57.07, 82.57],
                borderWidth: 1,
                hoverBackgroundColor: '#2e7d32',
                hoverBorderColor: '#2e7d32',
            },{
                label: 'Sorteringsgrad (%) 2025 Jan–Juli',
                data: [62.31, 89.26],
                borderWidth: 1,
                hoverBackgroundColor: '#2e7d32',
                hoverBorderColor: '#2e7d32',
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

{
    const ctx = document.getElementById('waste-and-sorting-per-location-and-period')
    new Chart(ctx, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Total levert (kg)',
            data: [12000, 7000, 18000, 5300, 7500, 11000],
            hoverBackgroundColor: '#2e7d32',
            hoverBorderColor: '#2e7d32',
        }, {
            type: 'line',
            label: 'Sorteringsgrad (%)',
            data: [12000, 12000, 11000, 14500, 16000, 15500],
        }],
        labels: ['jan-juli 2024 Havnevegen', 'jan-juli 2025 Havnevegen', 'Hele 2024 Havnevegen', 'jan-juli 2024 Mjåtveit', 'jan-juli 2025 Mjåtveit', 'Hele 2024 Mjåtveit']
    },
    options: {}
    });
}

{
    const ctx = document.getElementById('food-waste-goal-vs-development');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2024', '2025 jan-juli', 'Mål for 2025'],
            datasets: [{
                label: 'Kg matavfall',
                data: [380, 200, 285],
                backgroundColor: '#488ddbff',
                hoverBackgroundColor: '#2e7d32',
                hoverBorderColor: '#2e7d32',
            },{
                label: 'Kg matavfall (est.)',
                data: [0, 400, 0],
                backgroundColor: '#cf5d66ff',
                hoverBackgroundColor: '#2e7d32',
                hoverBorderColor: '#2e7d32',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 450,
                },
                x:{
                    stacked: true,
                }
            }
        }
    });
}
