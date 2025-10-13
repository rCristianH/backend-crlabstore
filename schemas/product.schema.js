const Joi = require('joi');

const id = Joi.string().min(6);
const selected = Joi.boolean();
const available = Joi.boolean();
const family = Joi.string();
const shortSerie = Joi.string();
const title = Joi.string();
const ref = Joi.string();
const price = Joi.number().integer().min(10000);
const cpu = Joi.string();
const logoBrandCPU = Joi.string().uri();
const logoCpu = Joi.string().uri();
const ram = Joi.string();
const storage = Joi.string();
const images = Joi.array().items(Joi.string().uri());

const createProductSchema = Joi.object({
  id: id.required(),
  selected: selected.required(),
  available: available.required(),
  family: family.required(),
  shortSerie: shortSerie.required(),
  title: title.required(),
  ref: ref.required(),
  price: price.required(),
  cpu: cpu.required(),
  logoBrandCPU: logoBrandCPU.required(),
  logoCpu: logoCpu.required(),
  ram: ram.required(),
  storage: storage.required(),
  images: images.required()
});
const updateProductSchema = Joi.object({
  selected,
  available,
  family,
  shortSerie,
  title,
  ref,
  price,
  cpu,
  logoBrandCPU,
  logoCpu,
  ram,
  storage,
  images
});
const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
