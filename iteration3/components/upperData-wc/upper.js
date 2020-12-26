
class upperData extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    async loadHTML() {
        let res = await fetch('./components/upperData-wc/upper.html')
        this.attachShadow({ mode: 'open' })
            .innerHTML = await res.text()
        
            // Mostrar valores globales
            this.loadInitData();
            // Escuchar eventos
            this.addEventListener("update-upperData",this);
    }

    static get observedAttributes() {
        return ['type'];
    }
    get type() {
        return this.getAttribute('type')
    }

    set type(newType) {
        return this.getAttribute('type', newType)
    }

    async loadInitData(){

    }

    handleEvent(event){
        if(event.type === "update-upperData"){
            console.log("LISTENER UPPER: ",event.detail)

            var country = this.shadowRoot.getElementById("country");
            var confirmed = this.shadowRoot.getElementById("confirmed");
            var recovered = this.shadowRoot.getElementById("recovered");
            var deaths = this.shadowRoot.getElementById("deaths");

            //TODO
        }
    }
}

window.customElements.define('upper-data-wc', upperData)
