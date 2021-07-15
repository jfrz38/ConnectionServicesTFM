import render from './render';

class WebComponent extends HTMLElement{

    connectedCallback() {
        console.log("ENTRA connectedCallback data")
        this.render() 
    }

    render() {
        this.innerHTML = render();
    }

}
export default WebComponent;
