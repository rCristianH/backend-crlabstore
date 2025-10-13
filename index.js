require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./api/middelwares/error.handler');
const port = process.env.PORT || 5555;
const routerApi = require('./api/routes');

const whitelist = process.env.CORS_WHITELIST
  ? process.env.CORS_WHITELIST.split(',')
  : [];
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

//middleware recibir json
app.use(express.json());

app.get('/api', (req, res) => {
  res.redirect('/new-route');
});

app.get('/api/new-route', (req, res) => {
  res.send('this is a new endpoint');
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {});
