export default function render() {
    return `
    <div id="div-left" class="split left">
    <div class="centered">
      <label>COMUNICACIÓN ENTRE WEB COMPONENTS NATIVOS</label>
      <hr />
      <div style="display: flex">
        <side-web-component
          style="flex: 1"
          position="left"
        >
        </side-web-component>
        <central-web-component style="flex: 1"></central-web-component>
        <side-web-component
          style="flex: 1"
          position="right"
        >
        
        </side-web-component>
      </div>
      <hr />
     <p>Se utiliza Nginx para conseguir que los componentes accedan a los servicios del "backend" de una manera más sencilla. </p>
     <p>Para estos componentes, se carga el script de las rutas "/center" y "/side". </p>
     <p>Nginx está configurado para redireccionar cada petición al puerto correspondiente y así cargar el script. </p>     
     <p>Se consigue que todas las peticiones al backend se realicen a través del mismo puerto y es el propio backend el que redirecciona.</p>
    </div>
  </div>
  <div class="split right">
    <div class="centered">
      <label
        >COMUNICACIÓN ENTRE WEB COMPONENTS RECIBIENDO DATOS DE gRPC O UN
        ENDPOINT</label
      >
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
      <p style="opacity: 0.0;">--</p>
    </div>
  </div>

<div class="footer">
  <p class="foot-p">Al renderizar los componentes web de la derecha desde el servidor se puede -fácilmente- levantar los servicios que necesitan para obtener la información.</p>
</div>
    `;
  }
