import earthFlag from './assets/img/base64img.js';

class countryInfo extends HTMLElement {

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
        
            // Mostrar valores globales
            this.loadInitData();
    }

    async loadInitData(){
        this.updateInfo("")
    }

    async updateInfo(countryCode){
        var data = this.getData(countryCode);
        
        this.shadowRoot.getElementById("flag").src = data.flag ? data.flag: earthFlag.image;
        this.shadowRoot.getElementById("country").innerText = data.country ? data.country : "";
        this.shadowRoot.getElementById("confirmed").innerText = data.confirmed ? data.confirmed : "";
        this.shadowRoot.getElementById("recovered").innerText = data.recovered ? data.recovered : "";
        this.shadowRoot.getElementById("deaths").innerText = data.deaths ? data.deaths : "";
        this.shadowRoot.querySelectorAll(".date").forEach(element => {
            element.innerText = data.date ? data.date : "";
        });
    }

    getData(countryCode){
        var data = {};
        if(countryCode == ""){
            //valores globales
            data.flag = ""
            //Llamada a la API
        }else{
            //Llamada a la API
        }
        return data;
    }
}

window.customElements.define('country-info-wc', countryInfo)
