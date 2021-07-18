import express from 'express';
import renderPage from './page/render.js';

const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/default', express.static('./build'));

app.get('/', (req, res) => {
  const html = renderPage();
  res.render('layout', { html });
});

app.listen(5201);
