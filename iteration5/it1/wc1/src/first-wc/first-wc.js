import render from './render';

class WebComponent extends HTMLElement{
    connectedCallback() {
        console.log('connected web component 1');
        this.render();
    }

    render(){
        this.innerHTML = render();
    }
}

export default WebComponent;
