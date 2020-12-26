
const { Request, Response } = require('../../../grpc/proto/list_pb');
const { ListClient } = require('../../../grpc/proto/list_grpc_web_pb.js');

var client = new ListClient('http://' + window.location.hostname + ':8081', null, null);

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

    callGRPC() {
        //Llamar a GRPC para obtener los datos
        client.getElements(new Request(), {}, (err, response) => {
            if (err) {
                console.log("ERROR getting message: ", err)
            } else {
                var list = response.getListList();
                //Enviar datos al padre para que los muestre al hijo
                searchButton.dispatchEvent(new CustomEvent("gRPC-call", {
                    bubbles: true,
                    composed: true,
                    detail: {
                        list: list
                    }
                }));
            }
        });
    }
}

window.customElements.define('call-grpc', webComponent)
