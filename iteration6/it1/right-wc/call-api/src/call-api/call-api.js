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
        //call api
        //var response = await 
        fetch('http://' + window.location.hostname+':'+location.port+'/api/elements')
            .then(response => response.text())
            .then(data => {
                console.log("data = ",data)
                console.log("list = ",list)
                this.dispatchEvent(new CustomEvent("list-call", { 
                    bubbles: true, 
                    composed: true,
                    detail:{
                        title: "API",
                        list: data.list
                    }
                }));
            });
        //console.log("response = ",response)
        //console.log("data = ",response.data)
        
    }
}
export default WebComponent;
