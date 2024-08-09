const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM "gallery"
	                    ORDER BY "likes";`
  pool.query(sqlText)
    .then(dbRes => res.send(dbRes.rows))
    .catch(dbErr => {
      console.log(`SQL Error in GET/api/gallery!`, dbErr)
      res.sendStatus(500)})
});

module.exports = router;
