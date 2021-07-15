(function () {
  'use strict';

  function render(value) {
      return `
    <div>
        <label id="center-value">${value}</label>
    </div>
    `;
    }

  class WebComponent extends HTMLElement{
      connectedCallback() {
          this.render(0);
      }

      render(value){
          this.innerHTML = render(value);
      }

      update(details){
          var value = parseInt(details.value);
          this.render(parseInt(this.querySelector("#center-value").innerText)+value);
        }
  }

  window.customElements.define('central-web-component', WebComponent);

}());
