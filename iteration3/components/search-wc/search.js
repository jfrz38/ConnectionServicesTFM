var input;
var results;
var countries = []
import list from './countries.js';
var countriesList = [];
class searchWC extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    async loadHTML() {
        countries = [{"Code":"","Name":"Global"}, ...list.data]
        let html = `
            <input type="text" id="countries" placeholder="text something...">
            <div id="results"></div>
        `
        this.attachShadow({ mode: 'open' }).innerHTML = html
        results = this.shadowRoot.getElementById("results")
        input = this.shadowRoot.getElementById("countries")
        await this.loadCountriesList();
        input.addEventListener('input', () => {
            var value = this.shadowRoot.getElementById("countries").value
            this.updateCountriesList(value)
        });

        
    }
    async updateCountriesList(value){
        countriesList.forEach(element => {
            var txt = element.innerText;
            if(txt.toUpperCase().includes(value.toUpperCase())){
                element.hidden = false;
            }else{
                element.hidden = true;
            }
        })
    }

    async loadCountriesList(){
        var html = "";
        countries.forEach(element => {
            html += this.setButtonHtml(element);
        });
        results.innerHTML = html;

        countriesList = this.shadowRoot.querySelectorAll(".countryButton")
    }

    setButtonHtml(element){
        return '<div><button class="countryButton" value="'+element.Code+'" onclick="this.getRootNode().host.selectCountry(this.value)">'+element.Name+'</button></div>';
    }

    selectCountry(value){
        this.dispatchEvent(new CustomEvent("update-country-map",{
            bubbles: true,
            detail:{
                code: value
            }
        }))
    }
}

window.customElements.define('search-wc', searchWC)
