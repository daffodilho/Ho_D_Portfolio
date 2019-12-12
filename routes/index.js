var express = require('express');
var router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res, next) => {
  console.log('at the main route');

  sql.getConnection((err, connection) => {
    if (err) { return console.log(error.message); }

    let query = "SELECT ID, title, preview FROM works";

    sql.query(query, (err, result) => {
      connection.release();

      if (err) { throw err; console.log(err); }
  
      console.log(result); 
  
      // render the home view with dynamic data
      res.render('index', { work : result });
    });
  });
})

router.get('/work/:id', (req, res) => {
  console.log('at the user route');
  console.log(req.params.id); // 1, 2, 3 or whatever comes after the slash

  sql.getConnection((err, connection) => {
    if (err) { return console.log(error.message); }

    let query = `SELECT * FROM works WHERE ID="${req.params.id}"`;

    sql.query(query, (err, result) => {
      connection.release();

      if (err) { throw err; console.log(err); }
  
      console.log(result); 
  
      // render the home view with dynamic data
      res.json(result[0]);
    });
  });
})

module.exports = router;