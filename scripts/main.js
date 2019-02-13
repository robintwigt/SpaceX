var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    //line, bar

    // The data for our dataset
    data: {
        labels: ["Stikstof", "Argon", "Koolstofdioxide", "Zuurstof", "Koolstofmonoxide", "Neon"],
        datasets: [{
            label: "My First dataset",
            backgroundColor:  
            [  
                'rgb(36, 18, 91)',
                'rgb(221, 204, 252)', 
                'rgb(69, 40, 160)',
                'rgb(78, 38, 214)',
                'rgb(146, 116, 242)',
                'rgb(57, 0, 252)',
            ],
            borderColor: 'rgb(36, 18, 91)',
            data: [21, 12, 43, 7, 13, 2],
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    //vul in: line, bar, pie, doughnut, radar, polarArea, bubble

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgba(146, 116, 242, 0.5)',
                                
            
            borderColor: 'rgb(36, 18, 91)',
            data: [0, 10, 35, 20, 66, 74, 100],
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    //vul in: line, bar, pie, doughnut, radar, polarArea, bubble

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: "My First dataset",
            backgroundColor:  
            [  
                'rgb(36, 18, 91)',
                'rgb(221, 204, 252)', 
                'rgb(69, 40, 160)',
                'rgb(78, 38, 214)',
                'rgb(146, 116, 242)',
                'rgb(57, 0, 252)',
            ],
            borderColor: 'rgb(36, 18, 91)',
            data: [40, 50, 85, 100, 120, 130],
        }]
    },

    // Configuration options go here
    options: {}
});