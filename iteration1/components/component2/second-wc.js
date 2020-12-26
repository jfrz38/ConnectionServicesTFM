var button;
var label;
var totalCount = 0;
class secondWebComponent extends HTMLElement {

    constructor() {
        super()
        
        this.addEventListener('click', () => {
            label.innerText = ++totalCount;
        });
    }

    async connectedCallback() {
        // componente conectado
        await this.loadHTML();
        button = this.shadowRoot.getElementById('buttonId');
        label = this.shadowRoot.getElementById('countValue');
        label.innerText = this.getAttribute('initialValue')

    }

    async loadHTML() {
        let res = await fetch('./components/component2/second-wc.html')
        this.attachShadow({ mode: 'open' })
            .innerHTML = await res.text()
            
        //const button = this.shadowRoot.getElementById('buttonId');
    }

    static get observedAttributes() {
        return ['initialValue'];
    }

    get initialValue(){
        return this.getAttribute('initialValue')
    }

    set initialValue(newInitialValue){
        return this.getAttribute('initialValue', newInitialValue)
    }

    getElement(element){
        return this.shadowRoot.getElementById(element)
    }

    
}

window.customElements.define('second-wc', secondWebComponent)
