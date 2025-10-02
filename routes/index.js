const productsRouter = require('./product.router');
const express = require("express")


function routerApi(app) {
  const router = express.Router()
  app.use("/api/v1",router)
  router.use('/items', productsRouter);
}

module.exports = routerApi;
