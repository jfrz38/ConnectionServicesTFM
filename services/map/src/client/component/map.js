import render from './render';

const divId = 'map'
class WebComponent extends HTMLElement{

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = render(divId);
    }

    getDivId(){
        return divId;
    }

    async loadMapValues(info){
        var queryData = !info || info.country === "" || info.country === undefined || info.country.toUpperCase() === "GLOBAL" ? "globalData" : `countryData(iso:"${info.iso}")`;
        const query = {
            query: `query{
                        ${queryData} {
                          data,
                          region
                        }
                    }`
                }
        const r = await fetch('/map', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(query)
          })
          const result = await r.json()
          queryData = !info|| info.country === "" || info.country === undefined || info.country.toUpperCase() === "GLOBAL" ? "globalData" : "countryData";
          const data = result.data[queryData]
          
          // NO HACER EN UN EJEMPLO REAL
          // Es un ejemplo de por qué no siempre se puede utilizar el método que queramos.
          // En este caso GraphQL nos obliga a parsear todos los strings a enteros iterando con un bucle
          for(let i = 1 ; i<data.data.length; i++){
              data.data[i][1] = parseInt(data.data[i][1])
              data.data[i][2] = parseInt(data.data[i][2])
          }
          return {
            options:{
             region:data.region,
             legend:"none",
             backgroundColor: "#81d4fa"
            }, 
            data:data.data
         }
    }
}
export default WebComponent;
