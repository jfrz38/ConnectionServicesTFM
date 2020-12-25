
//const { Request, Response } = require('../../../grpc/proto/list_pb');
const { ListClient } = require('../../../grpc/proto/list_grpc_web_pb.js');

var client = new ListClient
('http://' + window.location.hostname + ':8080', null, null);
//('http://localhost:8081',null, null);
//('http://162.168.67.92:8080', null, null);

//('http://' + window.location.hostname + ':8080', null, null);
//('http://localhost:8081',null, null);
//('http://162.168.67.92:8081', null, null);

var searchButton;
//var request;

class webComponent extends HTMLElement {

    constructor() {
        super()
        //request = new Request();
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
        console.log("call gRPC")
        //request.setId(1)
        client.getElements({}, (err, response) => {
            if (err) console.log("ERROR getting message: ", err)
            console.log("response = ",response)
            var list = response.getList();
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
