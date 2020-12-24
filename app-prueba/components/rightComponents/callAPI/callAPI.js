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
        let res = await fetch('./components/rightComponents/callAPI/callAPI.html')
        this.attachShadow({ mode: 'open' }).innerHTML = await res.text()
        searchButton = this.shadowRoot.getElementById('searchAPI')
        searchButton.addEventListener('click', () => {
            this.callAPI();
        });
    }

    async callAPI(){
        //Llamar a la API
        try{
            var response = await fetch("http://localhost:4000/")
            var list = await response.json();
            //Enviar datos al padre para que los muestre al hijo
            searchButton.dispatchEvent(new CustomEvent("api-call", { 
                bubbles: true, 
                composed: true,
                detail: { 
                    list: list
                } 
            }));
        }catch{
            //error
        }
        
    }
}

window.customElements.define('call-api', webComponent)
