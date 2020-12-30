import render from './render';

var label;
class WebComponent extends HTMLElement{
    connectedCallback() {
        console.log('connected central web component');
        this.render(0);
    }

    render(value){
        this.innerHTML = render(value);
        label = document.getElementById("center-value")
    }

    update(details){
        var value = parseInt(details.value);
        label.innerText = parseInt(label.innerText)+value
      }
}

export default WebComponent;
