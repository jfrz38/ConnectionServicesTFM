import earthFlag from './assets/img/base64img.js';

class upperData extends HTMLElement {

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
        <div class="col-md-3">Cofirmed<label id="confirmed"></label></div>
        <div class="col-md-3">Recovered<label id="recovered"></label></div>
        <div class="col-md-3">Deaths<label id="deaths"></label></div>
        `
        this.attachShadow({ mode: 'open' }).innerHTML = html;
        
            // Mostrar valores globales
            this.loadInitData();
    }

    async loadInitData(){
        this.updateData("")
    }

    async updateData(countryCode){
        var data = this.getData(countryCode);
        
        this.shadowRoot.getElementById("flag").src = data.flag ? data.flag: earthFlag.image;
        this.shadowRoot.getElementById("country").innerText = data.country ? data.country : "";
        this.shadowRoot.getElementById("confirmed").innerText = data.confirmed ? data.confirmed : "";
        this.shadowRoot.getElementById("recovered").innerText = data.recovered ? data.recovered : "";
        this.shadowRoot.getElementById("deaths").innerText = data.deaths ? data.deaths : "";
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

window.customElements.define('upper-data-wc', upperData)
