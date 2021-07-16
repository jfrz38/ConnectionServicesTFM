import render from './render';

class WebComponent extends HTMLElement{

    connectedCallback() {
        fetch('http://' + window.location.hostname+':'+location.port+'/information/data')
            .then(response => response.json())
            .then(data => {
                this.render(data);
        }).catch(e => {
            console.log("error = ",e)
        }); 
    }

    render(data) {
        this.innerHTML = render(data);
    }

    update(details){
        const iso = details.iso.toUpperCase() === "GLOBAL" ? "" : "/"+details.iso
        fetch('http://' + window.location.hostname+':'+location.port+'/information/data'+iso)
            .then(response => response.json())
            .then(data => {
                this.render(data);
        }).catch(e => {
            console.log("error = ",e)
        }); 
    }

}
export default WebComponent;
