
const {ListRequest, ListReply} = require('../../../grpc/proto/helloworld_pb');
const {GetElementsClient} = require('../../../grpc/proto/helloworld_grpc_web_pb.js');

var client = new GetElementsClient('http://localhost:8081');

var searchButton;
var request;

class webComponent extends HTMLElement {

    constructor() {
        super()
        request = new ListRequest();
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
        
        client.getElements(request, {}, (err, response) => {
            var list = response.getMessage();
            console.log("response = "+list);
            //Enviar datos al padre para que los muestre al hijo
            searchButton.dispatchEvent(new CustomEvent("gRPC-call", { 
                bubbles: true, 
                composed: true,
                detail: { 
                    list: list
                } 
            }));
        });
        
        
    }
}

window.customElements.define('call-grpc', webComponent)
