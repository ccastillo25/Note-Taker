const fs = require("fs")
const router = require('express').Router();
const db = require('../db/db.json');

router.get("/api/notes", function (req, res) {
  res.json(db)
});

router.post("/api/notes", function (req, res) {
  const id = Math.floor(Math.random() * 1000)
  const newNote = { title: req.body.title, text: req.body.text, id: id }
  db.push(newNote);
  fs.writeFileSync('db/db.json', JSON.stringify(db))
  res.json(db)
})

router.delete("/api/notes/:id", function (req, res) {
  // you have db
  // you need to eliminate the object with the id = req.id,params\
  db.splice(req.id,params);
  // and the overwrite the file
  fs.writeFileSync('db/db.json', JSON.stringify(db))
  res.json(db)
  console.log()
})

// router.delete("/api/notes/:id", function (req, res) {
//   notes.deleteNote(req.params.id)
//   .then(() => res.json({ok: true}))
//   .catch(err => res.status(500).json(err));
// })

module.exports = router;  