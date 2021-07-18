import render from './render';


class WebComponent extends HTMLElement {

    connectedCallback() {
        this.update({ iso: null, country: "global" })
    }

    render(data) {
        data.date = this.getDate()
        this.innerHTML = render(data);
    }

    getDate() {
        let d = new Date();
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return `${da}-${mo}-${ye}`
    }

    getTitle(type) {
        if (type === "confirm") return "Confirmed"
        if (type === "recover") return "Recovered"
        if (type === "dead") return "Deaths"
        return ""
    }

    getImage(type) {
        if (type === "confirm") return { type: "icon", name: "medical_services", header: "info" }
        if (type === "recover") return { type: "icon", name: "healing", header: "success" }
        if (type === "dead") return { type: "icon", name: "person_remove", header: "danger" }
        return { type: "image", name: "/common/assets/img/earth-flag.png", header: "dark" }
    }

    update(details) {
        const type = this.getAttribute('type')
        let iso = details.iso
        const country = details.country
        if (type === "" || type === undefined || type === null) {
            if (country.toUpperCase() === "GLOBAL") {
                this.render({ title: "Country", text: "Global", image: this.getImage("") })
            } else {
                this.render({ title: "Country", text: country, image: { type: "image", name: "https://www.countryflags.io/" + (iso).toLowerCase() + "/flat/64.png", header: "dark" } })
            }

        } else {
            if (iso === undefined || iso === null) iso = "Global"
            fetch('http://' + window.location.hostname + ':' + window.location.port + '/data/values/' + iso + '?type=' + type)
                .then(response => response.json())
                .then(data => {
                    let values = {
                        title: this.getTitle(type),
                        text: data.value,
                        image: this.getImage(type)
                    }
                    this.render(values)
                });
        }
    }
}
export default WebComponent;
