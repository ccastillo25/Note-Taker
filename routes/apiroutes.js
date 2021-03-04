const fs = require("fs")
const router = require('express').Router();
const db = require('../db/db.json');

router.get("/api/notes", function (req, res) {
    res.json(db)
  });

router.post("/api/notes", function (req, res) {
    
      const id = Math.floor(Math.random()*1000)
      const newNote = { title: req.body.title, text: req.body.text, id: id }
      db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    res.json(db)
})
  router.delete("/api/notes/:id", function (req, res) {
    const noteId = JSON.parse(req.params.id)
    console.log(noteId)
    fs.readFile(__dirname + "/db/db.json", 'utf8', function (error, notes) {
      if (error) {
        return console.log(error)
      }
      notes = JSON.parse(notes)
  
      notes = notes.filter(val => val.id !== noteId)
  
      fs.writeFile(__dirname + "/db/db.json", JSON.stringify(notes), function (error, data) {
        if (error) {
          return error
        }
        res.json(notes)
      })
    })
  })
  
module.exports = router;  