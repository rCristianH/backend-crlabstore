const express = require('express');
const app = express();
const port = 5555;
const routerApi = require('./routes');

//middleware recibir json
app.use(express.json())

app.get('/', (req, res) => {
  res.redirect('/new-route');
});

app.get('/new-route', (req, res) => {
  res.send('this is a new endpoint');
});

routerApi(app)

app.listen(port, () => {
  console.log('mi port' + port);
});
