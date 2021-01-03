import render from './render';

class WebComponent extends HTMLElement{

    
    connectedCallback() {
        console.log('connected list component');
        this.render();
    }

    render() {
        this.innerHTML = render();
    }

    updateList(detail){
        this.innerHTML = render(detail);
    }

}
export default WebComponent;
