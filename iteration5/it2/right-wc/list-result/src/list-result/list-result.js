import render from './render';

class WebComponent extends HTMLElement{

    
    connectedCallback() {
        console.log('connected list component');
        this.render();
    }

    async render() {
        this.innerHTML = render();
    }

    async updateList(detail){
        console.log("Update list : ",detail.type)
        var response = await fetch('http://' + window.location.hostname+':5200/list/'+detail.type)
        const html = await response.text();
        this.innerHTML = html;
    }

}
export default WebComponent;
