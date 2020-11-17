
const {HelloRequest, HelloReply} = require('../../../grpc/proto/helloworld_pb');
const {GreeterClient} = require('../../../grpc/proto/helloworld_grpc_web_pb.js');

var client = new GreeterClient('http://localhost:8081');

var button;
var totalCount = 0;

class webComponent extends HTMLElement {

    constructor() {
        super()
        
        this.addEventListener('click', () => {
            button.style.color === 'red'
                ? button.style.color = 'blue' :
                button.style.color = 'red';
            
            button.innerText = "Botón: "+(++totalCount)

            //this.setAttribute('name', 'newAttribute')
            var request = new HelloRequest();
            request.setName('World');

            client.sayHello(request, {}, (err, response) => {
                console.log(response.getMessage()+" :)");
            });
        });
    }

    async connectedCallback() {
        console.log('my component is connected!');
        await this.loadHTML()
        button = this.shadowRoot.getElementById('buttonId')
        button.style.color = 'red'

    }

    async loadHTML() {
        let res = await fetch('./components/firstComponent/webComponent.html')
        this.attachShadow({ mode: 'open' })
            .innerHTML = await res.text()
            
        //const button = this.shadowRoot.getElementById('buttonId');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (oldVal !== newVal) {
            //this.video.setAttribute('id', newVal);
            console.log("diferente: "+attrName+ " ; "+oldVal+" = "+newVal)
        } else {
            console.log("lo mismo: "+attrName+ " ; "+oldVal+" = "+newVal)
        }
    }

    static get observedAttributes() {
        return ['name'];
    }

    get name(){
        return this.getAttribute('name')
    }

    set name(newName){
        return this.getAttribute('name', newName)
    }

    getElement(element){
        return this.shadowRoot.getElementById(element)
    }
    
}

window.customElements.define('web-component', webComponent)
