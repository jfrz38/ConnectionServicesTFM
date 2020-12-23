var div;

class webComponent extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    async loadHTML() {
        let res = await fetch('./components/rightComponents/listGRPC/listGRPC.html')
        this.attachShadow({ mode: 'open' })
            .innerHTML = await res.text()
    }

    updateList(list){
        var html = "<p> NEW LIST </p> <ul>";
        for(var value in list){
            html += "<li>"+value+"</li>"
        }
        html += "</ul>"
        this.shadowRoot.innerHTML = html;
    }
}

window.customElements.define('list-grpc', webComponent)
