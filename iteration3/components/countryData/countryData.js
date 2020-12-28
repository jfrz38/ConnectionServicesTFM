class countryData extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    async loadHTML() {
        let html = `
        <div class="col-md-4">
            <p>Data</p>
            <div id="countryData"></div>
        </div>
        `
        this.attachShadow({ mode: 'open' }).innerHTML = html
        this.loadInitialData();
        
    }

    loadInitialData(){
        var html = `
        <p>Capital: N/A</p>
        <p>Continent: N/A</p>
        <p>Area: 148.9M km2</p>
        <p>Population: 6155182648</p>
        <p>Native name: N/A</p>
        <p>Population density: 41.34 pop/km2</p>
        `;

        this.shadowRoot.getElementById("countryData").innerHTML = html;
    }

}

window.customElements.define('country-data', countryData)
