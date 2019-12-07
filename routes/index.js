var express = require('express');
var router = express.Router();

const sql = require('../utils/sql');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', (req, res, next) => {
  console.log('at the main route');

  let query = "SELECT ID, title, preview FROM works";

  sql.query(query, (err, result) => {
    if (err) { throw err; console.log(err); }

    console.log(result); // should see objects wrapped in an array

    // render the home view with dynamic data
    res.render('index', { work : result });
    })
})

router.get('/work/:id', (req, res) => {
  // should really get the user data here and then fetch it thru, but let's try this asynchronously
  console.log('at the user route');
  console.log(req.params.id); // 1, 2, 3 or whatever comes after the slash

  let query = `SELECT * FROM works WHERE ID="${req.params.id}"`;

  sql.query(query, (err, result) => {
      if (err) { throw err; console.log(err); }

      console.log(result); // should see objects wrapped in an array

      // render the home view with dynamic data
      res.json(result[0]);
  })
})

module.exports = router;