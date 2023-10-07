const { error } = require('console');

var express = require('express');

var router = express.Router();


/* POST Iniciar evaluacion*/
router.get('/', async function(req, res) {
  res.status(200).send('si estamos ok je je')
});

module.exports = router;


