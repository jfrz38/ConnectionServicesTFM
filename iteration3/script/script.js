document.addEventListener("update-country-map", this);
function handleEvent(event) {
    if (event.type === "update-country-map") {
        this.countrySelected(event.detail.code);
    }
}

function countrySelected(code){
    
    //Llamar a todos los hijos necesarios para actualizar los valores
    console.log("event = ",code)
    document.querySelector("upper-data-wc").updateData(code)
    document.querySelector("map-wc").updateMap(code);

}
