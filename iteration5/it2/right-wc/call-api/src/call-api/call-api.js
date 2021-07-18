import render from './render';

class WebComponent extends HTMLElement{

    connectedCallback() {
        console.log('connected API button component');
        this.render();
        this.querySelector('#searchAPI').addEventListener('click', () => {
            this.updateList();
        });
    }

    render() {
        this.innerHTML = render();
      }


    async updateList(){
        this.dispatchEvent(new CustomEvent("list-call", { 
            bubbles: true, 
            composed: true,
            detail:{
                type: "api"
            }
        }));
    }
}
export default WebComponent;
