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
  /*
  return `
    <div style="height:70%; width:100%;">
      <img src="${data.image}" alt="flag" style="float: left;height: 120%;width: 25%;margin: 1%;">
      <div style="float: right;height: 100%;width: 70%; margin-right: 10px; text-align:right;">
        <p style="font-size: small; color:rgb(70, 70, 70);">${data.title}</p>
        <p style="font-size: large; font-weight: bold;">${data.text}</p>
      </div>
    </div>
    <div style="height:30%; width:100%; text-align:right; font-size: small;  margin-right: 10px; color:rgb(70, 70, 70);">
    <i class='far fa-calendar-alt'></i>
        ${date}
    </div>
    `*/
}

/*


          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-warning card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">content_copy</i>
                </div>
                <p class="card-category">Used Space</p>
                <h3 class="card-title">49/50
                  <small>GB</small>
                </h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          </div>

*/

/*


          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-warning card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">content_copy</i>
                </div>
                <p class="card-category">Used Space</p>
                <h3 class="card-title">49/50
                  <small>GB</small>
                </h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-info card-header-icon ">
                <div class="card-icon">
                  <i class="material-icons">medical_services</i>
                </div>
                <p class="card-category">Confirmed</p>
                <h3 class="card-title">$34,245</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-success card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">healing</i>
                </div>
                <p class="card-category">Recovered</p>
                <h3 class="card-title">75</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-danger card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">person_remove</i>
                </div>
                <p class="card-category">Deaths</p>
                <h3 class="card-title">+245</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          </div>


*/