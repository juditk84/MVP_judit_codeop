var express = require('express');
var router = express.Router();
const db = require("../model/helper");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'welcome to the API (Abnormal Protruding Intestine)' });
});

router.get('/api/exercicis', function(req, res, next) {
  db("SELECT * FROM exercicis;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get('/api/exercicis/:id', function(req, res, next) {

  const result = db(`SELECT * FROM exercicis WHERE id = ${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});



module.exports = router;
