export default function render() {
  return `
    <div id="div-left" class="split left">
    <div class="centered">
    <label>COMUNICACIÓN ENTRE WEB COMPONENTS (FRONT) + MICROSERVICIO (BACK) </label>

    
    <div style="text-align: left">
      <p> En la web de 
      <a href="https://martinfowler.com/articles/micro-frontends.html#Cross-applicationCommunication">
      Martin Fowler</a> exponen tres opciones posibles para lo comuncación entre 
      aplicaciones de micro frontend.</p>
        <div>
          <ul>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
          </ul>
          <p style="opacity: 0.0;">--</p>
        </div>
      </div>
    </div>
  </div>
  <div class="split right">
    <div class="centered">
      <label>COMUNICACIÓN ENTRE WEB COMPONENTS FULLSTACK</label>
      <hr />
      <table style="width: 100%;">
        <tr>
          <th> <call-grpc></call-grpc> </th>
          <th> <call-api></call-api> </th>
        </tr>
        <tr>
          <td colspan="2"><list-result path="/list"></list-result></td>
        </tr>
      </table>

      
      
      <hr />
      <p>En esta parte de la página existen tres componentes web: Los dos botones y la lista que aparece al pulsarlos. </p>
      <p>Los componentes que utilizan un endpoint (API y gRPC) están implementados siendo "componentes fullstack".</p>
      <p>En la parte servidor de cada componente web se encuentra la propia API y las llamadas se hacen a ella misma en lugar de llamar a un endpoint externo.</p>
      <p>Los datos cargados en la lista de la API son cogidos de una base de datos MongoDB, mientras que los datos del gRPC son valores estáticos guardados en el servidor del propio gRCP.</p>
      <p>Para una próxima iteración se podría añadir la opción de obtener datos de una base de datos PostgreSQL además de la de Mongo para mostrar las distintas opciones posibles que existen.</p>
      <p style="opacity: 0.0;">--</p>
    </div>
  </div>

<div class="footer">
  <p class="foot-p">Al renderizar los componentes web de la derecha desde el servidor se puede -fácilmente- levantar los servicios que necesitan para obtener la información.</p>
</div>
    `;
}
