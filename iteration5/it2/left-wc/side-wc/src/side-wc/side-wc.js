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

    /*clickButton(value){
        console.log("value innerText = ",value)
        console.log("clicked "+this.position+" button")
        console.log("2 = ",this.getAttribute('position'))
        var value = document.getElementById("side-value").value
        console.log("value = ",value)
        sendButton[0].dispatchEvent(new CustomEvent("side-operation", { 
            bubbles: true, 
            composed: true,
            detail: { 
                operation: this.position === "right" ? "add" : "substract",
                value: value 
            } 
        }));
    }*/
    
    renderHtml(value) {
        this.innerHTML = render(value);
      }

/*    static get observedAttributes() {
        return ['position'];
    }
    get position() {
        return this.getAttribute('position')
    }

    set position(newPosition) {
        return this.getAttribute('position', newPosition)
    }
*/

}
export default WebComponent;
