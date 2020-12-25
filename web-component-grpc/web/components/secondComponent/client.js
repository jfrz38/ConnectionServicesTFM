class webComponent extends HTMLElement {
constructor() {
        super()
        
    }

    async connectedCallback() {
        console.log('my second component is connected!');
        await this.loadHTML()
    }

    async loadHTML() {
        let res = await fetch('./components/secondComponent/webComponent.html')
        this.attachShadow({ mode: 'open' })
            .innerHTML = await res.text()  
    }
}

window.customElements.define('second-web-component', webComponent)
