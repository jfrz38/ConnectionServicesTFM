var sendButton;

class webComponent extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        await this.loadHTML()
    }

    disconnectedCallback() {
        this.sendButton.removeEventListener("click", this);
      }

    async loadHTML() {
        let res = await fetch('./components/leftComponents/sideWebComponent/sideWC.html')
        this.attachShadow({ mode: 'open' }).innerHTML = await res.text()
        sendButton = this.shadowRoot.getElementById('sendButton')
        if (this.position === 'left') {
            sendButton.textContent = "--->"
        } else if (this.position === 'right') {
            sendButton.textContent = "<---"
        } else {
            sendButton.textContent = "Send"
        }
        sendButton.addEventListener('click', () => {
            var value = this.shadowRoot.getElementById("side-value").value
            this.sendValue(value)
        });
    }

    static get observedAttributes() {
        return ['position'];
    }
    get position() {
        return this.getAttribute('position')
    }

    set position(newPosition) {
        return this.getAttribute('position', newPosition)
    }

    sendValue(value) {
        sendButton.dispatchEvent(new CustomEvent("side-operation", { 
            bubbles: true, 
            composed: true,
            detail: { 
                operation: this.position === "right" ? "add" : "substract",
                value: value 
            } 
        }));
    }
}

window.customElements.define('side-web-component', webComponent)
