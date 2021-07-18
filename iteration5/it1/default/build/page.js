(function () {
  'use strict';

  function renderPage() {
      return `
        <div>
            <p>Este es un web component</p>
            <first-wc><!--#include virtual="/wc1" --></first-wc>
        </div>
        <div>
            <p>Este es otro web component con un atributo</p>
            <second-wc ><!--#include virtual="/wc2?initialValue=0" --></second-wc>
        </div>
    `;
    }

  const $app = document.getElementById('app');

  window.addEventListener('popstate', () => {
      rerender();
  });

  function rerender() {
      $app.innerHTML = renderPage();
  }

}());
