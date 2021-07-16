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
        console.log("NAME getDivId = ",divId)
        return divId;
    }

    async loadMapValues(country){
        var queryData = country === "" ? "globalData" : `countryData(iso:"${country}")`;
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
          queryData = country === "" ? "globalData" : "countryData";
          const data = result.data[queryData]
          // NO HACER EN UN EJEMPLO REAL
          // Es un ejemplo de por qué no siempre se puede utilizar el método que queramos.
          // En este caso GraphQL nos obliga a parsear todos los strings a enteros iterando con un bucle
          console.log("data.data = ",data.data)
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
