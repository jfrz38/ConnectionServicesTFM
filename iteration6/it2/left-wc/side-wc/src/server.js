import express from 'express';

const app = express();
app.use('/side', express.static('./build'));

app.listen(6203);
