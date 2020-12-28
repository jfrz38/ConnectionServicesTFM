document.addEventListener("update-country-map", this);
function handleEvent(event) {
    if (event.type === "update-country-map") {
        this.countrySelected(event.detail.code);
    }
}

function countrySelected(code){
    
    //Llamar a todos los hijos necesarios para actualizar los valores
    console.log("event = ",code)
    document.querySelector("country-info-wc").updateInfo(code);
    document.querySelector("map-wc").updateMap([],code);
    document.querySelector("country-data-wc").updateData(code);
    document.querySelector("country-statics-wc").updateStatics([],code);

}
