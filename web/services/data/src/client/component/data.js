import render from './render';


class WebComponent extends HTMLElement{

    connectedCallback() {
        let type = this.getAttribute('type')
        if(type === "" || type === undefined || type === null){
            this.render({title: "Country", text: "Global", image:"/common/assets/img/earth-flag.png"})
        }else{
            // TODO: Obtener el ISO code
            fetch('http://' + window.location.hostname +':'+ window.location.port+'/data/values/es?type='+type)
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

    render(data) {
        let d = new Date();
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        const date = `${da}-${mo}-${ye}`
        this.innerHTML = render(data, date);
    }

    getTitle(type){
        if(type === "confirm") return "Confirmed"
        if(type === "recover") return "Recovered"
        if(type === "dead") return "Deaths"
        return ""
    }

    getImage(type){
        if(type === "confirm") return "/common/assets/img/botiquin.png"
        if(type === "recover") return "/common/assets/img/tirita.png"
        if(type === "dead") return "/common/assets/img/group.png"
        return "/common/assets/img/default.png"
    }
}
export default WebComponent;
