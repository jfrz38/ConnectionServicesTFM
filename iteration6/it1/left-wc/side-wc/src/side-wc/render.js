export default function render(value) {
    return `
    <div>
        <input type="number" id="side-value" max="10" min="0" value="0">
        <button id="sendButton">${value}</button>
    </div>
    `;
  }
