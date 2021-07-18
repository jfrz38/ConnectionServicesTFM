import render from './render';

var count;
var label;
class WebComponent extends HTMLElement {

    static get observedAttributes() {
        return ['initialValue'];
    }

    connectedCallback(){
        console.log("connected web component 2");
        count = this.getAttribute('initialValue');
        this.renderHtml(count);
        var button = document.getElementById("buttonId")
        label = document.getElementById("countValue")
        button.addEventListener('click', this.clickButton);
    }

    renderHtml(value) {
        this.innerHTML = render(value);
      }

      clickButton(){
        label.innerText = ++count;
      }
}
export default WebComponent;
