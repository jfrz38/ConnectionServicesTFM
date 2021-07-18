const template = document.createElement('template');
template.innerHTML = `
<style>
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>`;

var loaderDiv;
var dataDiv;

class countryInfo extends HTMLElement {

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
                    <div id="countryInfo"></div>
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

        this.shadowRoot.getElementById("countryInfo").innerHTML = html;
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
        
        // Mostrar resultados
        var html = `
        <p>Capital: `+data.capital+`</p>
        <p>Continent: `+data.continent+`</p>
        <p>Area: `+data.area+` km2</p>
        <p>Population: `+data.population+`</p>
        <p>Native name: `+data.nativeName+`</p>
        <p>Population density: `+data.populationDensity+` pop/km2</p>
        `;

        this.shadowRoot.getElementById("countryInfo").innerHTML = html;
        loaderDiv.hidden = true;
        dataDiv.hidden = false;
    }

}

window.customElements.define('country-info-wc', countryInfo)
