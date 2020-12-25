var label;

class webComponent extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    async loadHTML() {
        let res = await fetch('./components/leftComponents/centralWebComponent/centralWC.html')
        this.attachShadow({ mode: 'open' })
            .innerHTML = await res.text()
        label = this.shadowRoot.getElementById("center-value")
    }
      update(details){
        var operation = details.operation;
        var value = parseInt(details.value);
        label.innerText = operation === 'add' ? parseInt(label.innerText)+value : parseInt(label.innerText)-value
      }
}

window.customElements.define('central-web-component', webComponent)
