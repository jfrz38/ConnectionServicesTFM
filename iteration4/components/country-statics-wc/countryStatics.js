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
        
        // Mostrar valores globales
        this.loadInitData();
    }

    loadInitData(){
        
    }

    updateStatics(){
        
    }
}

window.customElements.define('country-statics-wc', countryStatics)
