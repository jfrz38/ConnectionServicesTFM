import render from './render';

class WebComponent extends HTMLElement{

    connectedCallback() {
        fetch('http://' + window.location.hostname+':'+location.port+'/information/data')
            .then(response => response.json())
            .then(data => {
                this.render(data.data);
        }).catch(e => {
            console.log("error = ",e)
        }); 
    }

    render(data) {
        this.innerHTML = render(data);
    }

    update(iso){
        console.log("UPDATE INFORMATION = ",iso)
    }

}
export default WebComponent;
