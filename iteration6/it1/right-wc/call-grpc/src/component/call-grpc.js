import render from './render';
//const { Request, Response } = require('./proto/list_pb');
//const { ListClient } = require('./proto/list_grpc_web_pb.js');

//var client = new ListClient('http://' + window.location.hostname + window.location.port+"/grpc/server", null, null);

class WebComponent extends HTMLElement{

    connectedCallback() {
        console.log('connected gRPC button component');
        this.render();
        this.querySelector('#searchGRPC').addEventListener('click', () => {
            console.log("pulsa botón")
            fetch('http://' + window.location.hostname +':'+ window.location.port+'/grpc/elements')
                .then(response => response.json())
                .then(data => {
                    this.dispatchEvent(new CustomEvent("list-call", { 
                        bubbles: true, 
                        composed: true,
                        detail:{
                            title: "gRPC",
                            list: data.list
                        }
                    }));
                });
            //client.getElements(new Request(), {}, (err, response) => {
                
                /*var list = err ? [] : response.getListList();
                this.dispatchEvent(new CustomEvent("gRPC-call", {
                    bubbles: true,
                    composed: true,
                    detail: {
                        list: list
                    }
                }));
                */
            /*    var list = [];
                if (err) {
                    console.log("ERROR getting message: ", err)
                } else {
                    list = response.getListList();
                }
                console.log("list = ",list)
                //Enviar datos al padre para que los muestre al hijo
                this.dispatchEvent(new CustomEvent("list-call", { 
                    bubbles: true, 
                    composed: true,
                    detail:{
                        type: "gRPC",
                        list: list
                    }
                }));
            });*/
        });
    }

    render() {
        this.innerHTML = render();
      }
}
export default WebComponent;
