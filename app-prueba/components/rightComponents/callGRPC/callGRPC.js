var searchButton;

class webComponent extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    disconnectedCallback() {
        this.searchButton.removeEventListener("click", this);
      }

    async loadHTML() {
        let res = await fetch('./components/rightComponents/callGRPC/callGRPC.html')
        this.attachShadow({ mode: 'open' }).innerHTML = await res.text()
        searchButton = this.shadowRoot.getElementById('searchGRPC')
        searchButton.addEventListener('click', () => {
            this.callGRPC();
        });
    }

    callGRPC(){
        //Llamar a GRPC para obtener los datos

        //Enviar datos al padre para que los muestre al hijo
        console.log("PRUEBAA")
    }
}

window.customElements.define('call-grpc', webComponent)
