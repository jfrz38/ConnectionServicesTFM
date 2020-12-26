class map extends HTMLElement {

constructor() {
    super()
}

async connectedCallback() {
    await this.loadHTML()
}

async loadHTML() {
    let res = await fetch('./components/map-wc/map.html')
    this.attachShadow({ mode: 'open' })
        .innerHTML = await res.text()
    var script = document.createElement('script');
    script.src = 'https://www.gstatic.com/charts/loader.js';
    document.head.appendChild(script);
    console.log("added script")
    var script2 = document.createElement('script');
    
    var head = await (await fetch('./components/map-wc/headScript.html')).text()
    script2.textContent = head;
    document.head.appendChild(script2)

        
}

    drawChart(details) {
        // Define the chart to be drawn.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Element');
        data.addColumn('number', 'Percentage');
        data.addRows([
        ['Nitrogen', 0.78],
        ['Oxygen', 0.21],
        ['Other', 0.01]
        ]);

        // Instantiate and draw the chart.
        var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
        chart.draw(data, null);

        /*
        <GChart style="width: 100%; height: 100%;"
                  :settings="{ packages: ['geochart'] }"
                  type="GeoChart"
                  :data="chartData"
                  :options="chartOptions"
                  :key="chartOptions.region"
                  />
        */
    }



}

window.customElements.define('map-wc', map)
                