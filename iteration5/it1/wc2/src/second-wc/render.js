export default function render(value) {
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
