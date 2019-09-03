const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/au');

router.get('/', (req, res) => res.send('Usr route'));

module.exports = router;
