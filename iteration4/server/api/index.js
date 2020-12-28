const express = require('express');
//cors
const cors = require('cors')
const corsOptions = {
    origin: true,
    credentials: true
}
//app
const app = express();
app.options('*', cors(corsOptions));

require('./models/db');

const apiRouter = require('./routes/index');
app.use('/', apiRouter);
 
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

module.exports = app;
