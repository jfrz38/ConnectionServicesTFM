import express from 'express';

const app = express();
app.use('/center', express.static('./build'));

app.listen(6102);
