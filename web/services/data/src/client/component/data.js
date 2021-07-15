import render from './render';

class WebComponent extends HTMLElement{

    connectedCallback() {
        this.render() 
    }

    render() {
        this.innerHTML = render();
    }

}
export default WebComponent;
