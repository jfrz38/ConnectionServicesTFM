export default function render(data) {

  let html = `

      <div class="card card-stats">
        <div class="card-header card-header-${data.image.header} card-header-icon">
          <div class="card-icon">
      `
  if (data.image.type === "icon") {
    html += `<i class="material-icons">${data.image.name}</i>`
  } else {
    html += `<img class="material-icons" src="${data.image.name}" style="height: 64px;width: 64px;"></img>`
  }

  html += `
       </div>
          <p class="card-category">${data.title}</p>
          <h3 class="card-title">
          ${data.text}
          </h3>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="material-icons">date_range</i> ${data.date}
          </div>
        </div>
      </div>
  `
  return html;
}