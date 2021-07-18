var options= {
        "region":"world",
        "legend":"none",
        "backgroundColor": "#81d4fa"
    }

const { Request, Response } = require('../../server/gRPC/proto/CountryData_pb.js');
const { CountryDataClient } = require('../../server/gRPC/proto/CountryData_grpc_web_pb.js');

var client = new CountryDataClient('http://' + window.location.hostname + ':8081', null, null);

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
            <div id="map" style="width: 100%; height: 100%; min-height: 350px; min-width: 600px;">
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
        console.log("draw map")
        var values = this.loadMapValues("")
        var data = google.visualization.arrayToDataTable(this.data);
        var chart = new google.visualization.GeoChart(this.shadowRoot.getElementById('map'));
        chart.draw(data, options);
    }

    loadMapValues(){
        console.log("load map values")
        client.getMapData(new Request(), {}, (err, response)=> {
            if(err){
                console.log("error getting message: ",err)
            }else{
                var result = response.getChartdataList();
                console.log("00")
                console.log(JSON.stringify(response))
                console.log("aa")
                console.log(JSON.stringify(result))
                console.log("bb")
                var data = [['Country','Confirmed', 'Deaths']];
                data.push(result)
                console.log("result = ",result)
                console.log("data = ",data)

                result.forEach(element => {
                    console.log("element 1 = ",element.getField1List())
                    console.log("element 2 = ",element.getField2List())
                    console.log("element 3 = ",element.getField3List())
                })
            }
            
        })
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
        if(code === "") code = "world";
        if(options.region === code) return;
        this.data = data;
        options.region = code;
        data = [['Country', 'Confirmed', 'Deaths'],
        [ code, 0,0]]
        var data = google.visualization.arrayToDataTable(data);
        var chart = new google.visualization.GeoChart(this.shadowRoot.getElementById('map'));
        chart.draw(data, options);
    }


}

window.customElements.define('map-wc', map)
