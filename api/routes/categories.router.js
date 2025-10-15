const express = require('express');

//🔴const CategoriesService = require("../services/category.service")

const router = express.Router();
//const service = new CategoriesService()

router.get('caterogies', async (req, res) => {});
router.get('/:categoryId', async (req, res) => {});

module.exports = router;
