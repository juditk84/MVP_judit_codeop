var express = require('express');
var router = express.Router();
const db = require("../model/helper");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'welcome to the API (Abnormal Protruding Intestine)' });
});

router.get('/acords', function(req, res, next) {
  db("SELECT * FROM acords ORDER BY RAND() LIMIT 10;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


//get 10 random exercises from a filtered selection of chords:

router.get('/acords/filtrats/:especie', function(req, res, next) { // no recordo què va comentar Germinal sobre la sintaxi /acords/FILTRATS

      // the URL query comes in the shape of a string with each chord separated by a comma,
      // but we want a string with each corch between "" and separated by a comma,
      // so I grab the string, SPLIT it into an array, MAP through the array to give "" to each chord,
      // then join it back with "chord1","chord2" sintax that mysql can read ^^
  db(`SELECT * FROM acords WHERE especie IN (${req.params.especie.split(",").map(exercici => `'${exercici}'`).join(",")}) ORDER BY RAND() LIMIT 10;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
