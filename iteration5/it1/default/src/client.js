import renderPage from './page/render'

const $app = document.getElementById('app');

window.addEventListener('popstate', () => {
    rerender();
});

function rerender() {
    $app.innerHTML = renderPage();
}
  