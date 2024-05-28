fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data){
    sortByCountryPopulation(data);
    const top30Countries = data.slice(0, 30);

    const countries = top30Countries.map(country => country.country);
    const populations = top30Countries.map(country => country.population);

    const trace = {
        x: countries,
        y: populations,
        type: 'bar',
        marker:{
            color : 'rgba(58,200,225,.8)',
            line: {
                color: 'rgba(58,200,225,1.0)',
                width: 1.5
            }
        }
    };

    const layout = {
        title: {
            text : 'Top 30 Countries by Population',
            font: {
                size: 24
            },
            xref: 'paper',
            x : 0.5,
            y : 0.95,
            yanchor : 'top',
            xanchor : 'center',
            pad :{
                t: 10,
                b: 10,
            },
            bgcolor: 'rgba(255, 223, 186, 0.8)',
            bordercolor: 'black',
            borderwidth: 2,
        },
        xaxis: {
            title: {
                text: 'Country',
                font : {
                    size: 18
                },
                standoff: 10,
                pad: {
                    t: 10,
                    b: 10,
                },
                bgcolor: 'rgba(186, 223, 255, 0.8)',
                bordercolor: 'black',
                borderwidth: 2,
            },
            tickangle: -45
        },
        yaxis: {
            title: {
                text: 'Population',
                font: {
                    size: 18
                },
                standoff: 10,
                pad: {
                    t: 10,
                    b: 10,
                },
                bgcolor: 'rgba(186, 223, 255, 0.8)',
                bordercolor: 'black',
                borderwidth: 2,
            },
            tickvals: [0, 200000000, 400000000, 600000000, 800000000,1000000000, 1200000000, 1400000000],
            ticktext: ['0', '0.2B','0.4B', '0.6B', '0.8B', '1.0B', '1.2B', '1.4B']
        },
        margin: {
            b: 100
        },
        bargap: 0.1
    };

    Plotly.newPlot('data-viz', [trace],layout);
}

function sortByCountryPopulation(data) {
    data.sort((a, b) => b.population - a.population);
}
