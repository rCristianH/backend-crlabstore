const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

//middleware recibir json
app.use(express.json());

const whitelist = process.env.CORS_WHITELIST
  ? process.env.CORS_WHITELIST.split(',')
  : ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.redirect('/api/new-route');
});

app.get('/api/new-route', (req, res) => {
  res.send('this is a new endpoint');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('hola' + port);
});
