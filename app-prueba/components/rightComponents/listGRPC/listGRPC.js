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

    updateList(title, list){
        var html = "<p> "+title+" LIST </p> <ul>";
        list.forEach(element => {
           html += "<li>"+element+"</li>"
        });
        html += "</ul>"
        this.shadowRoot.innerHTML = html;
    }
}

window.customElements.define('list-grpc', webComponent)
