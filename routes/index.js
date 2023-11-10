var express = require('express');
var router = express.Router();
const db = require("../model/helper");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'welcome to the API (Abnormal Protruding Intestine)' });
});

// router.get('/exercicis', function(req, res, next) {
//   db("SELECT * FROM exercicis;")
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });

router.get('/acords', function(req, res, next) {
  db("SELECT * FROM acords ORDER BY RAND() LIMIT 10;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//get 5 random exercises from a filter selection of chords:

router.get('/acords/filtrats/:especie', function(req, res, next) {

  db(`SELECT * FROM acords WHERE especie IN (${req.params.especie}) ORDER BY RAND() LIMIT 10;`) //split l'array per la ","; map i posar a cada element les cometes; join amb una altra coma
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
