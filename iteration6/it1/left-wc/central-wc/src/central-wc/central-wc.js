import render from './render';

class WebComponent extends HTMLElement{
    connectedCallback() {
        this.render(0);
    }

    render(value){
        this.innerHTML = render(value);
    }

    update(details){
        var value = parseInt(details.value);
        this.render(parseInt(this.querySelector("#center-value").innerText)+value)
      }
}

export default WebComponent;
