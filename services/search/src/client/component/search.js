// Data
import { ListClient } from './proto/list_grpc_web_pb';
import { Response } from './proto/list_pb';
import render from './render';

const client = new ListClient("http://localhost:8080");

class WebComponent extends HTMLElement {

    connectedCallback() {
        const request = new Response();
        client.getCountryList(request, {}, (error, response)=>{
            if(error)console.log("error = ",error)

            const data = response.toObject().dataList;

            this.render(data)
            const div = this.querySelector("#countries-search")
                div.addEventListener('click', (event) => {
                    const isButton = event.target.nodeName === 'A';
                    if (!isButton) {
                        return;
                    }
                    this.dispatchEvent(new CustomEvent("change-country", {
                        bubbles: true,
                        composed: true,
                        detail: {
                            iso: event.target.id,
                            country: event.target.innerText
                        }
                    }))
                })
        });

        /*fetch('http://' + window.location.hostname + ':' + window.location.port + '/search/countries')
            .then(response => response.json())
            .then(data => {
                this.render(data.list)
                const div = this.querySelector("#countries-search")
                div.addEventListener('click', (event) => {
                    const isButton = event.target.nodeName === 'A';
                    if (!isButton) {
                        return;
                    }
                    this.dispatchEvent(new CustomEvent("change-country", {
                        bubbles: true,
                        composed: true,
                        detail: {
                            iso: event.target.id,
                            country: event.target.innerText
                        }
                    }))
                })
            });*/

    }

    render(list) {
        this.innerHTML = render(list);
    }
}
export default WebComponent;
