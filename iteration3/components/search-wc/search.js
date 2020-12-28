var input;
var results;
var countries = []
import list from './countries.js';
class searchWC extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    async loadHTML() {
        countries = [{"Code":"","Name":"Global"}, ...list.data]
        let res = await fetch('./components/search-wc/search.html')
        this.attachShadow({ mode: 'open' })
            .innerHTML = await res.text()
        results = this.shadowRoot.getElementById("results")
        input = this.shadowRoot.getElementById("countries")
        await this.loadCountriesList();
        input.addEventListener('change', () => {
            var value = this.shadowRoot.getElementById("countries").value
            this.updateCountriesList(value)
        });

        
    }
    async updateCountriesList(value){
        //TODO : Modificar atributo a hidden o algo así mejor que renderizar la lista en cada iteración
        console.log("update list: ",value)
        var html = "";
        countries.filter(x=>x.toUpperCase().includes(value.toUpperCase())).forEach(element => {
           html += this.setButtonHtml(element);
        });
        results.innerHTML = html;
    }

    async loadCountriesList(){
        var html = "";
        countries.forEach(element => {
            html += this.setButtonHtml(element);
        });
        results.innerHTML = html;
    }

    setButtonHtml(element){
        return '<div><button value="'+element.Code+'" onclick="this.getRootNode().host.selectCountry(this.value)">'+element.Name+'</button></div>';
    }

    selectCountry(value){
        console.log(value)
        this.dispatchEvent(new CustomEvent("update-country-map",{
            bubbles: true,
            detail:{
                code: value
            }
        }))
    }
}

window.customElements.define('search-wc', searchWC)
