
/*const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});*/


document.getElementById('dark-mode').addEventListener('input', () => {
    if (Boolean(document.getElementById('dark-mode').value)) {
        document.body.classList.add('dark-mode')
    } else{
        document.body.classList.remove('dark-mode')
    }
})
