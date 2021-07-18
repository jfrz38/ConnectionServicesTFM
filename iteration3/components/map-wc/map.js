var options= {
        "region":"world",
        "legend":"none",
        "backgroundColor": "#81d4fa"
    }
var chart;
class map extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    async loadHTML() {
        let html =
        `
            MAP
            <div id="map" style="width: 100%; height: 100%;">
            </div>
        `
        this.attachShadow({ mode: 'open' }).innerHTML = html
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
        chart = new google.visualization.GeoChart(this.shadowRoot.getElementById('map'));
        chart.draw(data, options);
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
    get code() {
        return JSON.parse(this.getAttribute('code'))
    }
    set code(newCode) {
        this.setAttribute('code', newCode)
    }

    updateMap(data, code){
        console.log("update map: ",data +" ; code = ",code)
        this.data = data;
        options.region = code === '' ? "world": code;
        data = [['Country', 'Confirmed', 'Deaths'],
        [ code, 0,0]]
        var data = google.visualization.arrayToDataTable(data);
        chart.draw(data, options);
    }
}

window.customElements.define('map-wc', map)
