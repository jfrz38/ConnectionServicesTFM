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
        <!--# include virtual="/side?position=left" -->
        </side-web-component>
        <central-web-component style="flex: 1"><!--# include virtual="/center" --></central-web-component>
        <side-web-component
          style="flex: 1"
          position="right"
        >
        <!--# include virtual="/side?position=right" -->
        </side-web-component>
      </div>
      <hr />
      <p>
        Los extremos (input y button) son un web component añadido dos veces.
      </p>
      <p>
        Es decir, se crea el código una única vez y se añade dos veces en el
        HTML con un parámetro para indicar si será el botón de la izquierda o la
        derecha.
      </p>
      <p>Mientras que el label central es otro web component.</p>
      <p>La comunicación entre Web Components se realiza mediante eventos.</p>
      <p>
        Al pulsar el botón de enviar, el Web Component correspondiente lanza un
        evento que será leído por el padre. Una vez el padre lo reciba lo
        enviará al hijo correspondiente.
      </p>
      <hr />
      <div style="text-align: left">
        <p>
          Se ha buscado la información a partir de esta
          <a
            href="https://stackoverflow.com/questions/55001211/how-to-communicate-between-web-components-native-ui"
            >respuesta en StackOverFlow</a
          >
          donde -resumidamente- dice que:
        </p>
        <div>
          <ul>
            <li>
              "Si permites que los componentes hablen entre ellos directamente
              <b>NO</b> tienes componentes, tienes un sistema compacto"
            </li>
            <li>
              "Añade código para recibir <b>eventos</b> en el padre y
              <b>llamar a las funciones</b> en los componentes hijos"
            </li>
            <li>
              "Debes evitar que componentes hermanos hablen directamente entre
              ellos"
            </li>
            <li>
              "Es cierto que se podría envolver la funcionalidad en un nuevo
              componente padre pero podría producir <b>código spaghetti</b>"
            </li>
          </ul>
          <p style="opacity: 0.0;">--</p>
        </div>
      </div>
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
          <th> <call-grpc><!--# include virtual="/grpc" --></call-grpc> </th>
          <th> <call-api><!--# include virtual="/api" --></call-api> </th>
        </tr>
        <tr>
          <td colspan="2"><list-grpc><!--# include virtual="/list" --></list-grpc></td>
        </tr>
      </table>

      
      
      <hr />
      <p>
        Aquí se utiliza un endpoint mediante una API o un servidor gRPC para
        obtener la lista a mostrar.
      </p>
      <p>
        Cada uno de los botones pertenece a un Web Component aunque el
        funcionamiento es similar.
      </p>
      <p>
        Cada Web Component hace una llamada a la ruta correspondiente (según sea
        API o gRPC) y muestra una lista con los elementos devueltos.
      </p>
      <p>
        La API se ha creado de manera muy simple con Express en Node.JS y el
        servicio gRPC se ha creado siguiendo la
        <a href="https://developers.google.com/protocol-buffers/docs/overview"
          >documentación de Google</a
        >
        y ejemplos de GitHub del repositorio de gRPC <a href="https://github.com/grpc/grpc-web">(1)</a> <a href="https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld">(2)</a>
      </p>
      <p>
        La API devuelve una lista en formato JSON: Existe un servicio que
        escucha peticiones en el puerto 4000 y devuelve una lista de elementos
        de tipo String.
      </p>
      <p>
        gRPC necesita primero crear el buffer y después desplegar el servidor en
        el puerto 8081 para devolver una lista de elementos de tipo String.
        Además, para que el cliente pueda utilizar algunas funciones de gRPC es
        necesario modificar la clase del Web Component <b>callGRPC.js</b> para
        que pueda ser utilizada en un cliente web.
      </p>
      <p style="opacity: 0.0;">--</p>
    </div>
  </div>

<div class="footer">
  <p class="foot-p">Al renderizar los componentes web de la derecha desde el servidor se puede -fácilmente- levantar los servicios que necesitan para obtener la información.</p>
</div>
    `;
  }