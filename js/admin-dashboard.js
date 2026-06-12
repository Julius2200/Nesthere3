

//sample stats
let noUsers = 500;
let noAgents = 120;
let activeAgents = 70;
let closureRate = 75;

//sample usage data
let usageData = [
    {
        'month':'january',
        'usage': 10
    },
    {
        'month':"february",
        'usage': 20
    },
    {
        'month':"march",
        'usage': 30
    },
    {
        'month':"april",
        'usage': 40
    },
    {
        'month':"may",
        'usage': 50
    },
    {
        'month':"june",
        'usage': 60
    },
    {'month':"july",
        'usage': 70
    },
    {
        'month':'august',
        'usage': 140
    },
    {
        'month':'september',
        'usage': 130
    },
    {
        'month':'october',
        'usage': 160
    },
    {
        'month':'november',
        'usage': 150
    },
    {
        'month':'december',
        'usage': 120
    }
];
let months = usageData.map(item => item.month);
let usages = usageData.map(item => item.usage);

//sample closure data
let closureData = [
    {'closed': 3},
    {'closed': 2},
    {'closed': 3},
    {'closed': 14},
    {'closed': 12},
    {'closed': 16},
    {'closed': 18},
    {'closed': 14},
    {'closed': 13},
    {'closed': 21},
    {'closed': 45},
    {'closed': 20}
];

let closures = closureData.map(item => item.closed);

const ctx = document.querySelector(".usage-graph");

const lClosure = document.querySelector(".lead-closure-graph");

new Chart(ctx, {
    type: 'line',
    data:{
        labels: months, //x-axis categories
        datasets: [{
            label: "Months",
            data: usages, //y-axis values
            borderColor: '#2563eb', //line colour
            backgroundColor: 'rgba(37, 99, 235, 0.2)', //fill colour
            tension: 0.4, //to sm0othen out the lines
            fill: true, //to fill the area under the line
            PointRadius: 5, //size of the points
            pointHoverRadius: 7, //size of the points on hover
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                beginAtZero: true // forces y-axis to start at zero
            }
        }
    }
});

new Chart(lClosure, {
    type: 'line',
    data:{
        labels: months, //x-axis categories
        datasets: [{
            label: "Months",
            data: closures, //y-axis values
            borderColor: '#ff0000', //line colour
            backgroundColor: 'rgba(37, 99, 235, 0.2)', //fill colour
            tension: 0.4, //to sm0othen out the lines
            fill: true, //to fill the area under the line
            PointRadius: 5, //size of the points
            pointHoverRadius: 7, //size of the points on hover
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                beginAtZero: true // forces y-axis to start at zero
            }
        }
    }
});