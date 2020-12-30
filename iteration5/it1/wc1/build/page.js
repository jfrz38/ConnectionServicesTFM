(function () {
  'use strict';

  function render() {
      return `
    <div style="border: 4px dotted red;">
        <p>Soy un Custom Web Component</p>
    </div>
    `;
    }

  class WebComponent extends HTMLElement{
      connectedCallback() {
          this.log('connected web component 1');
          this.render();
      }

      render(){
          this.innerHTML = render();
      }
  }

  window.customElements.define('first-wc', WebComponent);

}());
