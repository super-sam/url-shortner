const express = require('express');
const router = express.Router();

const apis = require('../handlers/APIs/index');

router.get('/create-surl', (req, res) => apis.createShortURL(req, res));
router.post('/create-surl', (req, res) => apis.createShortURL(req, res));

module.exports = router;
