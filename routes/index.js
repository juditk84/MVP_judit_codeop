var express = require('express');
var router = express.Router();
const db = require("../model/helper");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'welcome to the API (Abnormal Protruding Intestine)' });
});

//get 5 random exercises from a filtered selection of chords:

router.get('/exercicis/filtrats/:tipus/:especie', function(req, res, next) { // This is not good syntax for the GET adress. Germinal told me how to do it but I forgot and forgot to ask again...

      // the URL query comes in the shape of a string with each chord/scale/interval separated by a comma,
      // but we want a string with each chord/scale/interval between "" and separated by a comma,
      // so I grab the string, SPLIT it into an array, MAP through the array to give "" to each chord/scale/interval,
      // then join it back with "chord/scale/interval1","chord/scale/interval2" sintax that mysql can read ^^
      db(`SELECT * FROM exercicis WHERE tipus = '${req.params.tipus}' AND especie IN (${req.params.especie.split(",").map(exercici => `'${exercici}'`).join(",")}) ORDER BY RAND() LIMIT 5;`)
      .then(results => {
        res.send(results.data);
      })
       .catch(err => res.status(500).send(err));
});

router.get('/slides/:activityGroup/:pageNumber', function(req, res) {
      // this is for the slides. I have a table with the contents of each slide with strings in markdown format that can be read with the markdown extension.
  db(`SELECT * FROM slides WHERE activityGroup = '${req.params.activityGroup}' AND pageNumber = '${req.params.pageNumber}'`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err))
})

module.exports = router;
