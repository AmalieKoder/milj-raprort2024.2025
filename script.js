

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
            labels: ['Havnevegen 2024 Hele', 'Havnevegen 2025 Jan–Juli', 'Mjåtveit 2024 Hele', 'Mjåtveit 2025 Jan–Juli'],
            datasets: [{
                label: 'Mengde (kg)',
                data: [18215, 9075, 11820, 7865],
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
            data: [12000, 7000, 18000, 5300, 7500, 1100],
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
            labels: ['2024 (baseline)', '2025 (mål -25%)', '2025 (est.)'],
            datasets: [{
                label: 'Kg matavfall',
                data: [380, 285, 400],
                hoverBackgroundColor: '#2e7d32',
                hoverBorderColor: '#2e7d32',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 450
                }
            }
        }
    });
}

{
    const ctx = document.getElementById('food-waste-development-and-estimate');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2024', '2025 (est.)'],
            datasets: [{
                label: 'Kg matavfall',
                data: [380, 400],
                hoverBackgroundColor: '#2e7d32',
                hoverBorderColor: '#2e7d32',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 450
                }
            }
        }
    });
}
