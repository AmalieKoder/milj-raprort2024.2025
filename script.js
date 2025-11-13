

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

/*
This site uses chartJs https://www.chartjs.org/ to render the canvas with an interactive chart
*/

{
    const ctx = document.getElementById('key-values-for-waste');

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
            responsive:true,
            maintainAspectRatio:false,
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
            responsive:true,
            maintainAspectRatio:false,
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
    const labels = ['jan-juli 2024 Havnevegen', 'jan-juli 2025 Havnevegen', 'Hele 2024 Havnevegen', 'jan-juli 2024 Mjåtveit', 'jan-juli 2025 Mjåtveit', 'Hele 2024 Mjåtveit'];

    const data = {
        datasets: [{
            type: 'bar',
            label: 'Total levert (kg)',
            data: [12000, 7000, 18000, 5300, 7500, 11000],
            hoverBackgroundColor: '#2e7d32',
            hoverBorderColor: '#2e7d32',
            yAxisID: 'y',
        }, {
            type: 'line',
            label: 'Sorteringsgrad (%)',
            data: [66.66666666666667, 66.66666666666667, 61.111111111111114, 80.55555555555556, 88.88888888888889, 86.11111111111111],
            yAxisID: 'y1',
        }],
        labels: labels
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive:true,
            maintainAspectRatio:false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                display: true,
                text: 'Total levert og sorteringsgrad'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Total levert (kg)'
                    },
                    max: 20000
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Sorteringsgrad (%)'
                    },
                    grid: {
                        drawOnChartArea: false // Prevents grid lines from overlapping
                    },
                    min: 0,
                    max: 100
                }
            }
        }
    };

    // Render chart
    new Chart(ctx, config);
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
            responsive:true,
            maintainAspectRatio:false,
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

{
    const ctx = document.getElementById('use-of-paper');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2024', '2025 jan-sep', 'Mål for 2025'],
            datasets: [{
                label: 'Antall ark',
                data: [47500, 12500, 33250],
                borderWidth: 1,
                backgroundColor: '#488ddbff',
                hoverBackgroundColor: '#2e7d32',
                hoverBorderColor: '#2e7d32',
            },{
                label: 'Antall ark (est)',
                data: [0, 16667, 0],
                borderWidth: 1,
                backgroundColor: '#cf5d66ff',
                hoverBackgroundColor: '#2e7d32',
                hoverBorderColor: '#2e7d32',
            }],
        },
        options: {
            responsive:true,
            maintainAspectRatio:false,
            scales: {
                y: {
                    beginAtZero: true
                },
                x:{
                    stacked:true
                }
            }
        }
    });
}

{
    const ctx = document.getElementById('emission-Hanevegen');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Forbrenning', 'Papp/papir', 'Treverk', 'EE-avfall', 'Netto effekt'],
            datasets: [{
                label: 'Tonn',
                data: [3.16, 2.08, 0.74, 0.76],
                backgroundColor: '#488ddbff',
                borderWidth: 1,
                hoverBackgroundColor: '#2e7d32',
                hoverBorderColor: '#2e7d32',
            },{
                label: 'Tonn CO₂e utslipp/spart',
                data: [1.14, -2.08, -0.3, -1.14, -2.38],
                backgroundColor: ctx => ctx.raw < 0 ? '#2e7d32' : '#c62828',
                borderWidth: 1,
                hoverBackgroundColor: '#2e7d32',
                hoverBorderColor: '#2e7d32',
            }],
        },
        options: {
            responsive:true,
            maintainAspectRatio:false,
            scales: {
                y: {
                    beginAtZero: true,
                    title:{
                        display: true,
                        text: 'Tonn'
                    }
                },
                x: {
                    stacked: false,
                }
            }
        }
    });

    
}
