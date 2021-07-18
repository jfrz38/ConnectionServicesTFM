export default function render(data) {
  return `
  <div class="card">
    <div class="card-header card-header-warning">
      <h4 class="card-title">Information</h4>
    </div>
    <div class="card-body">
      <p> Capital: ${data.capital}</p>
      <p> Continent: ${data.continent}</p>
      <p> Area: ${data.area}</p>
      <p> Population: ${data.population}</p>
      <p> Native name: ${data.nativeName}</p>
      <p> Population density: ${data.populationDensity} pop/km2</p>
    </div>
  </div>
  `
  }
