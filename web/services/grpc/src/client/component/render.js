export default function render(list) {
    var html = '<div>'
    list.forEach(element => {
        html+=`
        <div>
            <a class="country-button" href="/${element.Code}">${element.Name}</a>
        </div>
        `
    })
    html += '</div>'
    return html
  }
