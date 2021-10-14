export default function render(list) {
    var html = `
    <div id="countries-search">`
    list.forEach(element => {
        html+=`
        <ul class="nav">
          <li>
          <a id="${element.code}" class="nav-link" style="font-size: large; cursor: pointer;">
            ${element.name}
            </a>
          </li>
        </ul>
        `
    })
    html += '</div>'
    return html
  }
