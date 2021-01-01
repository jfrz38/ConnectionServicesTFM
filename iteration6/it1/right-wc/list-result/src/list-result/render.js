export default function render(value) {
    console.log("value = ",value)
    if(!value || value === undefined) return `<div>Lista no cargada todavía</div>`
    return `
    <div>
        <p style="text-align:center"> ${value.title} LIST </p>
        <ul>
        ${renderList(value.list)}
        </ul>
    </div>
    `;
  }

function renderList(list){
    var html = ""
    list.forEach(element => {
        html += "<li>"+element+"</li>"
     });
     return html;
}
