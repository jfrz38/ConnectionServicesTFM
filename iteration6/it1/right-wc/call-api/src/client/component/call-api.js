import render from './render';

class WebComponent extends HTMLElement{

    connectedCallback() {
        this.render();
        this.querySelector('#searchAPI').addEventListener('click', () => {
            this.updateList();
        });
    }

    render() {
        this.innerHTML = render();
      }


    updateList(){
        fetch('http://' + window.location.hostname+':'+location.port+'/api/elements')
            .then(response => response.json())
            .then(data => {
                this.dispatchEvent(new CustomEvent("list-call", { 
                    bubbles: true, 
                    composed: true,
                    detail:{
                        title: "API",
                        list: data.list
                    }
                }));
            });    
    }
}
export default WebComponent;
