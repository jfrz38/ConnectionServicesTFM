import render from './render';

class WebComponent extends HTMLElement {

    static get observedAttributes() {
        return ['initialValue'];
    }

    connectedCallback(){
        console.log("connected web component 2");
        const initialValue = this.getAttribute('initialValue');
        console.log("intial value = ",initialValue)
        this.render(initialValue);
        this.firstChild.addEventListener('click', this.clickButton);
    }

    render(value) {
        this.innerHTML = render(value);
      }

      clickButton(){

        console.log("click button")
        console.log("window initial value = ",window.initialValue.count)
        this.render(initialValue+=1)
      }
}
export default WebComponent;
