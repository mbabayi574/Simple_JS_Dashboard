new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
        datasets: [{ 
            data: [86,114,106,106,107,111,133,221,783,2478],
            label: "رمضانی",
            borderColor: "#3e95cd",
            fill: false
        }, { 
            data: [282,350,411,3222,635,809,947,1402,3700,5267],
            label: "بابایی",
            borderColor: "#8e5ea2",
            fill: false
        }, { 
            data: [168,1346,178,190,203,276,408,547,675,734],
            label: "سجادی",
            borderColor: "#3cba9f",
            fill: false
        }, { 
            data: [40,20,10,1222,24,5673,74,167,508,784],
            label: "علیپور",
            borderColor: "#e8c3b9",
            fill: false
        }, { 
            data: [6,3,800,2,80,26,82,172,312,433],
            label: "قلی زاده",
            borderColor: "#c45850",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        text: 'نمودار آماری بازاریابان'
        }
    }
    });
