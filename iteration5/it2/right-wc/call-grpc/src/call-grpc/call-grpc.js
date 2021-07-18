import render from './render';

class WebComponent extends HTMLElement{

    connectedCallback() {
        console.log('connected gRPC button component');
        this.render();
        this.querySelector('#searchGRPC').addEventListener('click', () => {
            this.callGrpc();
        });
    }

    render() {
        this.innerHTML = render();
      }


    async callGrpc(){
        //Llamar a la API
        this.dispatchEvent(new CustomEvent("list-call", { 
            bubbles: true, 
            composed: true,
            detail:{
                type: "gRPC"
            }
        }));
        
    }
}
export default WebComponent;
