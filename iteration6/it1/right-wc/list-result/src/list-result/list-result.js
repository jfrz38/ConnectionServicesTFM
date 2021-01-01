import render from './render';

class WebComponent extends HTMLElement{

    
    connectedCallback() {
        console.log('connected list component');
        // this.render();
    }

    async render() {
        this.innerHTML = render();
    }

    async updateList(detail){
        console.log("update list = ",detail)
        this.innerHTML = render(detail);
        /*var response = await fetch('http://' + window.location.hostname+':'+location.port+'/list/'+detail.type)
        const html = await response.text();
        this.innerHTML = html;*/
    }

}
export default WebComponent;
