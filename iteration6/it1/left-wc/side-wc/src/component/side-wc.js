import render from './render';

var sendButton;

class WebComponent extends HTMLElement {

    connectedCallback(){
        this.renderHtml(this.getAttribute('position') === "left"? "-" : "+");
        sendButton = this.querySelector("#sendButton")
        sendButton.addEventListener('click', () =>{
            var position = this.getAttribute('position')
            var value = this.querySelector("#side-value").value
            if (position === "left") value *=-1;
            this.dispatchEvent(new CustomEvent("side-operation", { 
            bubbles: true, 
            composed: true,
            detail: { 
                value: value 
            } 
        }));
        });
            
    }

    renderHtml(value) {
        this.innerHTML = render(value);
      }

}
export default WebComponent;
