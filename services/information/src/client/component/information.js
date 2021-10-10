import render from './render';

class WebComponent extends HTMLElement {

    connectedCallback() {

        document.addEventListener("change-country", this);

        fetch('http://' + window.location.hostname + ':' + location.port + '/information/data')
            .then(response => response.json())
            .then(data => {
                this.render(data);
            }).catch(e => {
                console.log("error = ", e)
            });
    }

    render(data) {
        this.innerHTML = render(data);
    }

    update(details) {
        const iso = details.iso.toUpperCase() === "GLOBAL" ? "" : "/" + details.iso
        fetch('http://' + window.location.hostname + ':' + location.port + '/information/data' + iso)
            .then(response => response.json())
            .then(data => {
                this.render(data);
            }).catch(e => {
                console.log("error = ", e)
            });
    }

    handleEvent(event) {
        console.log("EVENT DETAIL = ",event.detail)
        this.update(event.detail)
    }

}
export default WebComponent;
