export default function render(list) {
    var html = `
    <div class="search-header">
        <img src="/common/assets/img/earth-icon.png" alt="" height="32" width = "32" style="vertical-align: middle;"/>
        <a style="vertical-align: middle; color:white"> COUNTRIES </a>
    </div>
    <hr class="horizontal-separator">
    <div class="search">`
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
