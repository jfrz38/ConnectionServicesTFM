export default function render(divId) {
  return `
  <div class="card">
    <div class="card-header card-header-warning">
      <h4 class="card-title">Map</h4>
    </div>
    <div class="card-body" id="${divId}"></div>
  </div>
  `
  }
