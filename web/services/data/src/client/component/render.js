export default function render(data, date) {
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
    `
  }
