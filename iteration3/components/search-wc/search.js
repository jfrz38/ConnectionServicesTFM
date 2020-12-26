var input;
var results;
var searchBtn;
var list = ["a","b","c", "cc", "B"];

class searchWC extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    async loadHTML() {
        let res = await fetch('./components/left-wc/leftWC.html')
        this.attachShadow({ mode: 'open' })
            .innerHTML = await res.text()
        results = this.shadowRoot.getElementById("results")
        input = this.shadowRoot.getElementById("countries")
        await this.loadList();
        input.addEventListener('change', () => {
            var value = this.shadowRoot.getElementById("countries").value
            this.updateList(value)
        });

        
    }
    updateList(value){
        console.log("update list: ",value)
        var html = "";
        list.filter(x=>x.toUpperCase().includes(value.toUpperCase())).forEach(element => {
           html += "<div><button>"+element+"</button></div>"
        });
        results.innerHTML = html;
    }

    async loadList(){
        var html = "";
        list.forEach(element => {
            html += "<div><button>"+element+"</button></div>"
        });
        results.innerHTML = html;
    }
}

window.customElements.define('search-wc', search)
