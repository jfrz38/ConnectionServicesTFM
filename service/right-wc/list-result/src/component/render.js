export default function render(value) {
    if(!value || !value.list || !value.title) return `<div>Lista no cargada todavía</div>`
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
