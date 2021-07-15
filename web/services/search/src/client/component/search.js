import render from './render';

class WebComponent extends HTMLElement{

    connectedCallback() {
        fetch('http://' + window.location.hostname +':'+ window.location.port+'/grpc/countries')
                .then(response => response.json())
                .then(data => {
                    this.render(data.list)
                });
    }

    render(list) {
        this.innerHTML = render(list);
      }
}
export default WebComponent;
