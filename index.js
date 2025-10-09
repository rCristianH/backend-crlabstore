const express = require('express');
const app = express();
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middelwares/error.handler');
const port = 5555;
const routerApi = require('./routes');

//middleware recibir json
app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/new-route');
});

app.get('/new-route', (req, res) => {
  res.send('this is a new endpoint');
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('mi port' + port);
});
