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

var divs = {
    "confirmedGraphic":null,
    "confirmedDay":null,
    "confirmedWeek":null,

    "recoveredGraphic":null,
    "recoveredDay":null,
    "recoveredWeek":null,

    "deathsGraphic":null,
    "deathsDay":null,
    "deathsWeek":null,
}

class countryStatics extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    async loadHTML() {
        let html = 
        `
        <div class="col-md-4">
            <div id="confirmed">Gráfica1</div>
            <p>Confirmed cases</p>
            <p>
                <span style="color:#5dade2">
                    <i class="fas fa-long-arrow-alt-up"><label id="confirmedDay">1</label>%</i>
                </span>
                increase in last day.
            </p>
            <p>
                <span style="color:#5dade2">
                    <i class="fas fa-long-arrow-alt-up"><label id="confirmedWeeks">1</label>%</i>
                </span>
                increase in last 15 days.
            </p>
        </div>
        <div class="col-md-4">
        <div id="recovered">Gráfica2</div>
            <p>Recovered cases</p>
            <p>
                <span class="text-success">
                    <i class="fas fa-long-arrow-alt-up"><label id="recoveredDay">2</label>%</i>
                </span>
                increase in last day.
            </p>
            <p>
                <span class="text-success">
                    <i class="fas fa-long-arrow-alt-up"><label id="recoveredWeeks">2</label>%</i>
                </span>
                increase in last 15 days.
            </p>
        </div>
        <div class="col-md-4">
        <div id="deaths">Gráfica3</div>
            <p>Deaths cases</p>
            <p>
                <span style="color:#e74c3c">
                    <i class="fas fa-long-arrow-alt-up"><label id="deathDay">3</label>%</i>
                </span>
                increase in last day.
            </p>
            <p>
                <span style="color:#e74c3c">
                    <i class="fas fa-long-arrow-alt-up"><label id="deathWeeks">3</label>%</i>
                </span>
                increase in last 15 days.
            </p>
        </div>
        </div>
        `
        this.attachShadow({ mode: 'open' }).innerHTML = html;
        
        divs.confirmedGraphic = this.shadowRoot.getElementById("confirmed");
        divs.confirmedDay = this.shadowRoot.getElementById("confirmedDay")
        divs.confirmedWeek = this.shadowRoot.getElementById("confirmedWeeks")

        divs.recoveredGraphic = this.shadowRoot.getElementById("recovered");
        divs.recoveredDay = this.shadowRoot.getElementById("recoveredDay")
        divs.recoveredWeek = this.shadowRoot.getElementById("recoveredWeeks")

        divs.deathsGraphic = this.shadowRoot.getElementById("deaths");
        divs.deathsDay = this.shadowRoot.getElementById("deathDay")
        divs.deathsWeek = this.shadowRoot.getElementById("deathWeeks")

        console.log("divs = ",divs)
        // Mostrar valores globales
        this.updateGlobalStatics();
    }

    updateStatics(code){
        if(code == ""){
            this.updateGlobalStatics()
        }else{
            this.updateCountryStatics(code);
        }
    }

    updateGlobalStatics(){
        var promises = []
        //Datos de las gráficas
        //Confirm
        promises.push(fetch("http://localhost:4000/covid/global/confirm")
            .then(data => data.json())
            .then(data => {
                return this.calculateImprove(data, "confirmed");
            }))
        //Recover
        promises.push(fetch("http://localhost:4000/covid/global/recover")
            .then(data => data.json())
            .then(data => {
                return this.calculateImprove(data, "recovered");
            }))
        //Death
        promises.push(fetch("http://localhost:4000/covid/global/dead")
            .then(data => data.json())
            .then(data => {
                return this.calculateImprove(data, "deaths");
            }))

        Promise.all(promises).then(response=>{
            //Esconder loader
            console.log("response = ",response)
            //Confirmed
            divs.confirmedDay.innerText = response[0].dayImprove
            divs.confirmedWeek.innerText = response[0].weeksImprove
            //Recovered
            divs.recoveredDay.innerText = response[1].dayImprove
            divs.recoveredWeek.innerText = response[1].weeksImprove
            //Deaths
            divs.deathsDay.innerText = response[2].dayImprove
            divs.deathsWeek.innerText = response[2].weeksImprove
        })

    }

    updateCountryStatics(){
        var confirmedData;
        var recoveredData;
        var deathData;
    }

    calculateImprove(data, value){
        if(data.dates.length >=2){
            //Día
            var lastTwo = data[value].slice((data[value].length - 2), data[value].length)
            var improveDays = ((lastTwo[1]-lastTwo[0])/lastTwo[1])*100

            //Semanas
            var aux = data[value]
            var improveWeeks = ((aux[aux.length-1]-aux[0])/aux[aux.length-1])*100

            return {
                
                dayImprove:improveDays.toFixed(2),
                weeksImprove:improveWeeks.toFixed(2),
                data:data
            }
        }else{
            return {
                dayImprove:0,
                weeksImprove:0,
                data:data
            }
        }
        
    }
}

window.customElements.define('country-statics-wc', countryStatics)
