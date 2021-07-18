(function () {
  'use strict';

  function render(value) {
      return `
    <div style="border: 4px dotted blue;">
    <div>
        <label>Count:</label>
        <label id="countValue">${value}</label>
    </div>
    <button id="buttonId">Incrementar</button>
    </div>
    `;
    }

  var count = 0;
  var label;
  class WebComponent extends HTMLElement {

      static get observedAttributes() {
          return ['initialValue'];
      }

      connectedCallback(){
          console.log("connected web component 2 :)");
          const initialValue = this.getAttribute('initialValue');
          console.log("intial value = ",initialValue);
          this.renderHtml(initialValue);
          var button = document.getElementById("buttonId");
          //count = initialValue;
          //countValue
          label = document.getElementById("countValue");
          button.addEventListener('click', this.clickButton);
      }

      renderHtml(value) {
          this.innerHTML = render(value);
        }

        clickButton(){
          console.log("click button");
          //label.innerText = ++totalCount;
          this.renderHtml(count);
        }
  }

  window.customElements.define('second-wc', WebComponent);

}());
