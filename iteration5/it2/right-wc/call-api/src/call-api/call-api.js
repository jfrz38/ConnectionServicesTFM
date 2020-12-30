import render from './render';

class WebComponent extends HTMLElement{

    connectedCallback() {
        console.log('connected API button component');
        this.render();
        this.querySelector('#searchAPI').addEventListener('click', () => {
            this.callAPI();
        });
    }

    render() {
        this.innerHTML = render();
      }


    async callAPI(){
        //Llamar a la API
        console.log("Entra llamada a la API")
        try{
            //console.log("a1")
            fetch('http://' + window.location.hostname+':5200/list/api')
            //console.log("a2")
            //var response = await fetch('http://localhost:5210/');
            //var list = await response.json();
            //Enviar datos al padre para que los muestre al hijo
            /*this.dispatchEvent(new CustomEvent("api-call", { 
                bubbles: true, 
                composed: true,
                detail: { 
                    list: list
                } 
            }));*/
        }catch(e){
            console.log("error getting api data", e)
            //error
        }
        
    }
}
export default WebComponent;
