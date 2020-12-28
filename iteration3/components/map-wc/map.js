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
        var script2 = document.createElement('script');
        script2.textContent =
            `google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
    
    google.charts.setOnLoadCallback(x => {
        document.querySelector("map-wc").drawMap();
    });`
        document.head.appendChild(script2)
    }

    drawMap() {
        var data = google.visualization.arrayToDataTable(this.data);
        var chart = new google.visualization.GeoChart(this.shadowRoot.getElementById('map'));
        chart.draw(data, this.options);

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

    /*static get observedAttributed() {
        return ['data', 'options', 'key']
    }*/

    get data() {
        return JSON.parse(this.getAttribute('data'))
    }
    set data(newData) {
        this.setAttribute('data', newData)
    }
    get options() {
        return JSON.parse(this.getAttribute('options'))
    }
    set options(newOptions) {
        this.setAttribute('options', newOptions)
    }

    get key() {
        return JSON.parse(this.getAttribute('key'))
    }
    set key(newKey) {
        this.setAttribute('key', newKey)
    }

    updateMap(data, options, key){
        console.log("update map")
        this.data = data;
        this.options = options;
        this.key = key;
    }


}

window.customElements.define('map-wc', map)
