export default function renderPage() {
    return `
        <div>
            <p>Este es un web component</p>
            <first-wc><!--#include virtual="/wc1" --></first-wc>
        </div>
        <div>
            <p>Este es otro web component con un atributo</p>
            <second-wc initialValue=0><!--#include virtual="/wc2?initialValue=0" --></second-wc>
        </div>
    `;
  }
