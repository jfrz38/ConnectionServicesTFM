class firstWebComponent extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        // componente conectado
        await this.loadHTML()

    }

    async loadHTML() {
        let res = await fetch('./components/component1/first-wc.html')
        this.attachShadow({ mode: 'open' })
            .innerHTML = await res.text()
    }

}

window.customElements.define('first-wc', firstWebComponent)
