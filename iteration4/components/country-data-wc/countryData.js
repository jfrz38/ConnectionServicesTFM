import earthFlag from './assets/img/base64img.js';

const { Request, Response } = require('../../server/gRPC/proto/CountryData_pb.js');
const { CountryDataClient } = require('../../server/gRPC/proto/CountryData_grpc_web_pb.js');

var client = new CountryDataClient('http://' + window.location.hostname + ':8081', null, null);

var divs = {}

class countryData extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    async loadHTML() {
        let html = `
        <div class="col-md-3">
            <img id="flag">
            Country: <label id="country"></label>
        </div>
        <div class="col-md-3">Cofirmed<label id="confirmed"></label><p class="date">date</p></div>
        <div class="col-md-3">Recovered<label id="recovered"></label><p class="date">date</p></div>
        <div class="col-md-3">Deaths<label id="deaths"></label><p class="date">date</p ></div>
        `
        this.attachShadow({ mode: 'open' }).innerHTML = html;
        //Divs a actualizar
        divs = {
            flag: this.shadowRoot.getElementById("flag"),
            country: this.shadowRoot.getElementById("country"),
            confirmed: this.shadowRoot.getElementById("confirmed"),
            recovered: this.shadowRoot.getElementById("recovered"),
            deaths: this.shadowRoot.getElementById("deaths"),
            date: this.shadowRoot.querySelectorAll(".date")
        }
        console.log("divs = ",divs)
        // Mostrar valores globales
        this.loadInitData();
    }

    async loadInitData(){
        this.updateData("")
    }

    updateData(countryCode){
        //Llamar gRPC
        var data = {};
        var request = new Request();
        request.setCode(countryCode);
        client.getCountryData(request, {}, (err, response)=> {
            if(err){
                console.log("error getting message: ",err)
            }else{
                var result = response.getData();

                var data = {}
                data.flag = result.getFlag()
                data.confirmed = result.getConfirmed()
                data.recovered = result.getRecovered()
                data.deaths = result.getDeaths()
                data.date = result.getDate()
                data.country = result.getCountry()

                divs.flag.src = data.flag ? data.flag: earthFlag.image;
                divs.country.innerText = data.country ? data.country : "";
                divs.confirmed.innerText = data.confirmed ? data.confirmed : "";
                divs.recovered.innerText = data.recovered ? data.recovered : "";
                divs.deaths.innerText = data.deaths ? data.deaths : "";
                divs.date.forEach(element => {
                    element.innerText = data.date ? data.date : "";
                });
            }
        })
    }
}

window.customElements.define('country-data-wc', countryData)
