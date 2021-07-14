const template = document.createElement('template');
template.innerHTML = `
<style>

</style>`;

var loaderDiv;
var dataDiv;

class information extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    async loadHTML() {
        let html = `
            <div id="container" style="width:100%; height:100%; position:relative;">
                <div id="loader" style="width:100%; height:100%; position:absolute; ">
                    <div class="loader">
                    
                    </div>
                </div>
                <div id="data">
                    <p>Data</p>
                    <div id="information"></div>
                </div>
            <div>
        `
        this.attachShadow({ mode: 'open' }).innerHTML = html
        
        loaderDiv = this.shadowRoot.getElementById("loader");
        loaderDiv.hidden = true;
        dataDiv = this.shadowRoot.getElementById("data");
        this.shadowRoot.appendChild(template.content.cloneNode(true));
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

        this.shadowRoot.getElementById("information").innerHTML = html;
    }

    async updateInfo(code){
        
        dataDiv.hidden = true;
        loaderDiv.hidden = false;
        var data = {}
        if (code === ''){
          data = {
          "capital":"N/A",
          "continent":"N/A",
          "area":"148.9M",
          "population":"6155182648",
          "nativeName":"N/A",
          "populationDensity":"41.34"
          }
        }else{
          // Llamar a la API
          data = await (await fetch('http://localhost:4000/data/'+code)).json()
        }
        
        var a = await (await fetch('http://localhost:8081/example')).json()
        console.log("Recibido de la API: ",a)
        // Mostrar resultados
        var html = `
        <p>Capital: `+data.capital+`</p>
        <p>Continent: `+data.continent+`</p>
        <p>Area: `+data.area+` km2</p>
        <p>Population: `+data.population+`</p>
        <p>Native name: `+data.nativeName+`</p>
        <p>Population density: `+data.populationDensity+` pop/km2</p>
        `;

        this.shadowRoot.getElementById("information").innerHTML = html;
        loaderDiv.hidden = true;
        dataDiv.hidden = false;
    }

}

window.customElements.define('information-wc', information)
