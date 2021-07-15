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

    loadMapValues(country){
        console.log("load map values: ",country)
        return {
           options:{
            region:"world",
            legend:"none",
            backgroundColor: "#81d4fa"
           }, 
           data:[
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700],
            ['Spain', 1000]
          ]

        }
        
    }
}
export default WebComponent;
