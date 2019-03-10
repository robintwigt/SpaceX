//De code hieronder heb ik gemaakt m.b.v. een tutorial op youtube.
//Let op: ik heb de code niet klakkeloos overgenomen, maar ik heb het aangepast naar hoe ik het wilde.

var countDownDate = new Date("Apr 3, 2019 00:00:00").getTime();
var countDownfunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("dagen").innerHTML = days + " dagen";
    document.getElementById("uren").innerHTML = hours + " uren";
    document.getElementById("minuten").innerHTML = minutes + " minuten";
    document.getElementById("seconden").innerHTML = seconds + " seconden";
    if(distance < 0) {
        clearInterval(countDownfunction);
        document.getElementById("demo").innerHTML = "AANGEKOMEN OP MARS";
    }
},1000);




//De code hieronder heb ik gemaakt m.b.v. 'www.chartjs.com'.
//Let op: ik heb de code niet klakkeloos overgenomen, maar ik heb het aangepast naar hoe ik het wilde.

var ctx = document.getElementById('myChart1').getContext('2d');
var dataChart1 = [21, 12, 43, 7, 13, 2];
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    //vul in: line, bar, pie, doughnut, radar, polarArea, bubble

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
            borderColor: 'rgb(255, 255, 255)',
            data: dataChart1,
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'bottom',
        }
    }
});





var ctx = document.getElementById('myChart2').getContext('2d');
var dataChart2 = [1, 3, 5, 2, 7, 6, 2];
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'polarArea',
    //vul in: line, bar, pie, doughnut, radar, polarArea, bubble

    // The data for our dataset
    data: {
        labels: ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
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
                'rgb(125, 0, 252)',

            ],
            borderColor: 'rgb(252, 252, 252)',
            data: dataChart2,
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'bottom',
        }
    }
});

var ctx = document.getElementById('myChart3').getContext('2d');
var dataChart3 = [62, 60, 45, 96, 23, 74];
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    //vul in: line, bar, pie, doughnut, radar, polarArea, bubble

    // The data for our dataset
    data: {
        labels: ["Brood", "Fruit", "Groenten", "Vlees", "Snacks", "Rijst"],
        datasets: [
        {
            label: "Percentage",
            backgroundColor: 'rgba(146, 116, 242, 0.5)',
                                
            
            borderColor: 'rgb(252, 252, 252)',
            data: dataChart3,
        /*},
        {
            label: "Nu",
            backgroundColor: 'rgba(36, 18, 91, 0.5)',
                                
            
            borderColor: 'rgb(252, 252, 252)',
            data: [30, 60, 35, 20, 66, 74, 100],*/
        }]
    },


    // Configuration options go here

    options: {
        scales: {
            yAxes: [{
                ticks: {
                	beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChart4').getContext('2d');
var dataChart4 = [0, 52000, 78000, 97000, 131000, 193000];
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    //vul in: line, bar, pie, doughnut, radar, polarArea, bubble

    // The data for our dataset
    data: {
        labels: ["Januari", "Februari", "Maart", "April", "Mei", "Juni"],
        datasets: [
        {
            label: "Verbruikte liters",
            backgroundColor: 'rgba(146, 116, 242, 0.5)',
                                
            
            borderColor: 'rgb(36, 18, 91)',
            data: dataChart4,
        /*},
        {
            label: "Nu",
            backgroundColor: 'rgba(36, 18, 91, 0.5)',
                                
            
            borderColor: 'rgb(252, 252, 252)',
            data: [30, 60, 35, 20, 66, 74, 100],*/
        }]
    },


    // Configuration options go here

    options: {
        scales: {
            yAxes: [{
                ticks: {
                	beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChart5').getContext('2d');
var dataChart5 = [55, 96, 81, 36, 8];
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',
    //vul in: line, bar, pie, doughnut, radar, polarArea, bubble

    // The data for our dataset
    data: {
        labels: ["0-20", "21-40", "41-60", "61-80", "81-100"],
        datasets: [
        {
            label: "Aantal mensen",
            backgroundColor: 'rgba(146, 116, 242, 0.6)',
                                
            
            borderColor: 'rgb(36, 18, 91)',
            data: dataChart5,
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'bottom',
        }
    }
});