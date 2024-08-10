const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const sqlText = `UPDATE "gallery"
	                  SET "likes" = "likes" + 1
                  	WHERE "id" = $1;`
  const sqlValues = [req.params.id]
  pool.query(sqlText, sqlValues)
  .then(dbRes => {res.sendStatus(200)})
  .catch(dbErr => {
    console.log(`SQL Error in PUT/api/gallery/like/:id!`, dbErr)
    res.sendStatus(500)
  })
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

// POST /api/gallery
router.post(`/`, (req, res) => {
  const sqlText = `INSERT INTO "gallery"
  ("title", "description", "url")
  VALUES
  ($1, $2, $3)`
  const sqlValues = [req.body.title, req.body.description, req.body.url]
  pool.query(sqlText, sqlValues)
  .then(dbRes => res.sendStatus(200))
  .catch(dbErr => {
    console.log(`SQL Error in POST/api/gallery!`, dbErr)
    res.sendStatus(500)
  })
})
module.exports = router;
