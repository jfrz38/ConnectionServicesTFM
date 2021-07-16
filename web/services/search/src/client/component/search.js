import render from './render';

class WebComponent extends HTMLElement{

    connectedCallback() {
        fetch('http://' + window.location.hostname +':'+ window.location.port+'/search/countries')
                .then(response => response.json())
                .then(data => {
                    this.render(data.list)
                    const div = this.querySelector("#countries-search")
                    div.addEventListener('click', (event) => {
                        const isButton = event.target.nodeName === 'BUTTON';
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
        
    }

    render(list) {
        this.innerHTML = render(list);
    }

}
export default WebComponent;
